export interface Playbook {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  status: string;
}

export const playbooks: Playbook[] = [
  {
    id: '1',
    slug: 'soc-playbook-phishing-email-investigation',
    title: 'SOC Playbook: How to Investigate a Phishing Email',
    excerpt: 'Step-by-step SOC playbook for analyzing phishing emails, identifying indicators, and responding to threats.',
    content: `# SOC Playbook: How to Investigate a Phishing Email

Phishing emails are one of the most common alerts handled by SOC analysts.

This playbook provides a **step-by-step process** for identifying, analyzing, and responding to phishing threats.

---

## Objective

- Identify phishing emails
- Extract indicators of compromise (IOCs)
- Prevent further impact
- Improve detection rules

---

## Step 1: Initial Triage

Start with quick validation:

- Who reported the email?
- How many users received it?
- Is it still active in inboxes?

### Red Flags:
- Urgent language ("Act now")
- Suspicious sender domain
- Unexpected attachments
- External sender pretending to be internal

---

## Step 2: Analyze Email Header

Extract key fields:

- From
- Reply-To
- Return-Path
- Sender IP

### Tools:
- [Google Messageheader](https://toolbox.googleapps.com/apps/messageheader/)
- [Microsoft Header Analyzer](https://mha.azurewebsites.net/)

### What to look for:
- Domain mismatch
- Suspicious sending IP
- SPF/DKIM/DMARC failures

---

## Step 3: Inspect Links (DO NOT CLICK)

- Copy URLs safely
- Expand shortened links

### Tools:
- [URLScan](https://urlscan.io)
- [VirusTotal](https://www.virustotal.com)  

### Red Flags:
- Misspelled domains (micros0ft.com)
- Long redirect chains
- Newly registered domains

---

## Step 4: Analyze Attachments

⚠ Only in sandbox environment

### Tools:
- [VirusTotal](https://www.virustotal.com)
- [Hybrid Analysis](https://www.hybrid-analysis.com)  

### Check for:
- File type (.docm, .exe, .zip)
- Embedded macros
- Dropped payloads

---

## Step 5: Identify Indicators of Compromise (IOCs)

Collect:

- Malicious domains
- IP addresses
- File hashes
- Email addresses

Store them for:
- SIEM rules
- Threat intel platforms

---

## Step 6: Determine Impact

Ask:

- Did anyone click the link?
- Were credentials entered?
- Was malware executed?

### If YES:
➡ Escalate immediately

---

## Step 7: Containment

Actions may include:

- Block domain/IP in firewall
- Quarantine emails
- Disable compromised accounts
- Reset passwords

---

## Step 8: Eradication & Recovery

- Remove malicious files
- Reimage infected machines (if needed)
- Restore systems

---

## Step 9: Lessons Learned

Improve defenses:

- Add detection rules
- Update email filters
- Improve user awareness

---

## Step 10: Document the Incident

Include:

- Timeline
- IOCs
- Impact
- Actions taken

---

## Example Scenario

### The Alert

A user reports receiving an email with subject: **"URGENT: Password Reset Required - Microsoft Account"** from \`security-alert@micros0ft-support.com\` at **14:32 UTC**.

Seven additional users received the same email, but only one reported it.

---

### Step 1: Initial Triage Response

**Timeline:**
- 14:32 - User reports suspicious email
- 14:35 - SOC analyst begins triage
- 14:37 - Confirmed 8 users received email

**Finding:** Email still present in inboxes (not yet deleted by users).

---

### Step 2: Email Header Analysis

**Using:** Microsoft Header Analyzer

**Critical Findings:**
\`\`\`
From: security-alert@micros0ft-support.com
Return-Path: noreply@mail.hosting-provider.cloud
SPF: FAIL (domain does not authorize sending IP)
DKIM: FAIL
DMARC: FAIL
Sending IP: 192.0.2.45 (GeoIP shows Poland)
Reply-To: password-reset@micros0ft-support.com
\`\`\`

**Red Flag Alert:** SPF/DKIM/DMARC failures indicate spoofed email.

---

### Step 3: Link Analysis

**URL in email:** "Confirm your identity: [link]"

**Using:** URLScan.io

**Results:**
- Redirect chain: Original URL → bit.ly link → account-verify.info → IP 198.51.100.22
- **account-verify.info** registered 2 days ago
- Hosts login form mimicking Microsoft 365
- Site categorized as "phishing"

**VirusTotal Check:** 15/89 vendors flag as malicious

---

### Step 4: Attachment Analysis

**File:** \`Important_Update.docm\` (1.2 MB)

**Using:** Hybrid Analysis

**Findings:**
- Macro-enabled document
- Embedded VBScript
- Attempts to download executable from xn--80akhbyknj4f.tk (Cyrillic domain)
- Sandbox detonation reveals potential Emotet trojan

---

### Step 5: IOC Collection

**Indicators Extracted:**
- **Domains:** micros0ft-support.com, account-verify.info, xn--80akhbyknj4f.tk
- **IPs:** 192.0.2.45, 198.51.100.22
- **Email:** security-alert@micros0ft-support.com, password-reset@micros0ft-support.com
- **File Hash:** 5a1c3d8e9b2f4c7a0d9e1f3b5c7a9d0e (SHA256 of docm)
- **Bit.ly ID:** bit.ly/3x7mK2n

---

### Step 6: Impact Determination

**User Interview Results:**
- 2 users clicked the link (both entered credentials)
- 0 users downloaded the attachment
- No malware execution detected yet

**Verdict:** CONFIRMED COMPROMISE - Credential exposure

---

### Step 7: Containment Actions

**Immediate (Within 5 minutes):**
- ✅ Quarantine all 8 emails
- ✅ Block sender domain in email gateway
- ✅ Reset passwords for 2 affected users
- ✅ Force password reset for all users (company-wide MFA push)

**Network Level:**
- ✅ Block IPs in firewall: 192.0.2.45, 198.51.100.22
- ✅ Block domains via DNS sinkhole

---

### Step 8: Eradication & Recovery

**User Actions:**
- 2 compromised users: Forced logout, password reset, credential rotation
- Check for lateral movement in logs (none detected)
- Enable additional monitoring on compromised accounts

**Email System:**
- Remove phishing campaign from archives
- Block all IOCs permanently

---

### Step 9: Lessons Learned

**Detection Improvements:**
- Add YARA rule for .docm with embedded VBScript
- Create SIEM alert for emails failing SPF/DKIM from Microsoft domains
- Block lookalike domain patterns (micros0ft, m1cr0soft, etc.)

**User Training:**
- Email blast warning about phishing campaign
- Highlight: Always check sender domain, not just display name
- Reminder: Microsoft never asks for password reset via email

---

### Step 10: Documentation

**Incident Report Summary:**
- **Incident ID:** INC-2026-0847
- **Timeline:** 14:32 UTC - 14:55 UTC (23 minutes detection to containment)
- **Users Affected:** 8 (2 compromised)
- **Root Cause:** Credential harvesting + trojan distribution
- **Status:** RESOLVED
- **Follow-up:** Monitor compromised accounts for 30 days

---

### Lessons from This Incident

1. **SPF/DKIM failures** are reliable phishing indicators
2. **Credential exposure** requires immediate password reset
3. **Macro-enabled documents** should trigger high-priority alerts
4. **Rapid response** (23 minutes) prevented wider compromise
5. **Domain monitoring** missed lookalike domain registration

---

## Conclusion

A structured approach ensures:

- Faster response
- Better detection
- Reduced risk

Phishing is not just about emails — it is often the **first step in a larger attack chain**.

---

## Key Takeaways

- Always analyze before interacting
- Use sandbox environments
- Collect and reuse IOCs
- Document everything
`,
    category: 'SOC',
    tags: ['SOC', 'Phishing', 'Playbook', 'Blue Team', 'Incident Response'],
    date: '2026-03-28',
    readTime: '8 min read',
    author: 'Christoffer',
    status: 'Ready',
  },
];