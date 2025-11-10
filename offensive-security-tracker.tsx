import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, BookOpen, Award, ChevronDown, ChevronRight, Trash2, Plus, FileText } from 'lucide-react';

export default function OffensiveSecurityTracker() {
  const [expandedSections, setExpandedSections] = useState({});
  const [completedItems, setCompletedItems] = useState({});
  const [notes, setNotes] = useState({});
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [currentNote, setCurrentNote] = useState({ path: '', content: '' });

  // Load data from storage on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const [completedRes, notesRes] = await Promise.all([
          window.storage.get('offensive-sec-completed'),
          window.storage.get('offensive-sec-notes')
        ]);
        
        if (completedRes?.value) {
          setCompletedItems(JSON.parse(completedRes.value));
        }
        if (notesRes?.value) {
          setNotes(JSON.parse(notesRes.value));
        }
      } catch (error) {
        console.log('First time loading - no saved data');
      }
    };
    loadData();
  }, []);

  // Save data to storage
  const saveData = async (type, data) => {
    try {
      await window.storage.set(
        type === 'completed' ? 'offensive-sec-completed' : 'offensive-sec-notes',
        JSON.stringify(data)
      );
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const curriculum = {
    "1. Offensive Security Pathway (Udemy)": {
      icon: "🎯",
      color: "bg-red-500",
      modules: {
        "Level 1: OSR - Offensive Security Recruit": [
          "مقدمة في Offensive Security",
          "مفاهيم الأمن السيبراني (CIA)",
          "الفرص الوظيفية في Offensive Security",
          "أساسيات Windows",
          "أساسيات Linux",
          "أساسيات الشبكات (TCP/IP, UDP, Routing)",
          "مقدمة في Cryptography",
          "مقدمة في Scripting"
        ],
        "Level 2: OSO - Offensive Security Officer": [
          "أساسيات Virtualization (VMware, VirtualBox, Hyper-V)",
          "Windows - مستوى متوسط (User Management)",
          "Linux - مستوى متوسط (Commands, Services)",
          "أساسيات الشبكات المتقدمة",
          "Scripting (Bash, PowerShell, Python)",
          "OSINT Techniques",
          "Social Engineering (Phishing, Spear-Phishing)",
          "الدفاع ضد Social Engineering"
        ],
        "Level 3: OSL - Offensive Security Lieutenant": [
          "أدوات الهاكينج الأساسية (Nmap, Metasploit, Burp Suite)",
          "Vulnerability Scanning (OpenVAS, Nessus)",
          "Basic Exploit Development",
          "Hacking Windows Systems",
          "Hacking Linux Systems",
          "Password Cracking (John the Ripper, Hashcat)",
          "Web Application Vulnerabilities"
        ],
        "Level 4: OSC - Offensive Security Colonel": [
          "Web Attacks المتقدمة (SQL Injection, CSRF, RFI, SSRF)",
          "Post-Exploitation Techniques",
          "Privilege Escalation (Windows & Linux - WinPEAS, LinPEAS)",
          "Hacking Active Directory (Kerberoasting, Pass-the-Hash, Bloodhound)",
          "Advanced Network Attacks (MITM, ARP Spoofing, DNS Poisoning)",
          "Windows & Linux Hacking المتقدم"
        ],
        "Level 5: OSM - Offensive Security Major": [
          "Advanced Persistence Techniques (Windows & Linux)",
          "Pivoting & Lateral Movement",
          "Cloud Exploitation (Azure AD, IAM)",
          "Documentation & Reporting",
          "Buffer Overflow Exploitation (Linux & Windows)"
        ],
        "Level 6: OSG - Offensive Security General": [
          "Advanced Evasion Techniques (SIEM, Firewalls, EDR Bypass)",
          "UAC Bypass Techniques",
          "Active Directory Certificate Services (AD CS) Exploitation",
          "Advanced Reverse Engineering (IDA, Ghidra)",
          "Malware Analysis",
          "Wireless Hacking (WEP, WPA, WPA2 - Aircrack-ng)",
          "الإعداد للشهادات (CEH, OSCP, eCPTX, PNPT)"
        ]
      }
    },
    "2. Web Pentesting - Rana Khalil Academy": {
      icon: "🌐",
      color: "bg-blue-500",
      modules: {
        "Web Penetration Testing Course": [
          "Web Application Fundamentals",
          "Hacking Web Applications",
          "Python Automation for Exploits",
          "Defense Mechanisms"
        ],
        "Access Control Vulnerabilities": [
          "Finding Access Control Issues",
          "Exploiting Access Control",
          "Defense Strategies"
        ],
        "Authentication Vulnerabilities": [
          "Authentication Bypass Techniques",
          "Multi-Factor Authentication Attacks",
          "Session Management Issues"
        ],
        "Business Logic Vulnerabilities": [
          "Identifying Logic Flaws",
          "Exploitation Techniques",
          "Real-world Examples"
        ],
        "CORS Vulnerabilities": [
          "Understanding CORS",
          "Finding CORS Issues",
          "Exploitation & Defense"
        ],
        "Clickjacking": [
          "Clickjacking Basics",
          "Attack Scenarios",
          "Prevention Methods"
        ],
        "Command Injection": [
          "OS Command Injection",
          "Blind Command Injection",
          "Defense Techniques"
        ],
        "CSRF - Cross-Site Request Forgery": [
          "CSRF Token Bypass",
          "SameSite Cookies",
          "Defense Mechanisms"
        ],
        "XSS - Cross-Site Scripting": [
          "Reflected XSS",
          "Stored XSS",
          "DOM-based XSS",
          "XSS to Account Takeover"
        ],
        "DOM-Based Vulnerabilities": [
          "DOM XSS",
          "Open Redirection",
          "Web Message Manipulation"
        ],
        "Directory Traversal": [
          "Path Traversal Attacks",
          "File Inclusion",
          "Defense Methods"
        ],
        "File Upload Vulnerabilities": [
          "Unrestricted File Upload",
          "Bypass Techniques",
          "Defense Strategies"
        ],
        "HTTP Host Header Attacks": [
          "Host Header Injection",
          "Password Reset Poisoning",
          "Defense Techniques"
        ],
        "Information Disclosure": [
          "Finding Sensitive Data",
          "Error Messages Exploitation",
          "Mitigation"
        ],
        "JWT Vulnerabilities": [
          "JWT Structure",
          "Algorithm Confusion",
          "Token Manipulation"
        ],
        "OAuth 2.0 Vulnerabilities": [
          "OAuth Flow Attacks",
          "Token Theft",
          "Defense Strategies"
        ],
        "SQL Injection": [
          "Union-based SQLi",
          "Blind SQLi",
          "Time-based SQLi",
          "Advanced SQLi Techniques"
        ],
        "SSRF - Server-Side Request Forgery": [
          "Basic SSRF",
          "Blind SSRF",
          "Cloud Metadata Attacks"
        ],
        "WebSocket Vulnerabilities": [
          "WebSocket Security",
          "Cross-Site WebSocket Hijacking",
          "Defense Methods"
        ],
        "XXE - XML External Entity": [
          "XXE Basics",
          "Blind XXE",
          "XXE to SSRF"
        ]
      }
    },
    "3. pwn.college - Core Material": {
      icon: "🥋",
      color: "bg-purple-500",
      modules: {
        "Getting Started": [
          "Start Here - 2 Modules, 11 Challenges",
          "Linux Luminarium - 16 Modules, 127 Challenges",
          "Computing 101 - 7 Modules, 69 Challenges",
          "Playing With Programs - 4 Modules, 116 Challenges"
        ],
        "Core Curriculum - Earn Your Belts!": [
          "Intro to Cybersecurity - 7 Modules, 183 Challenges 🟡 Yellow Belt",
          "Program Security - 5 Modules, 159 Challenges 🟠 Orange Belt",
          "System Security - 6 Modules, 93 Challenges 🔵 Blue Belt",
          "Software Exploitation - 5 Modules, 90 Challenges 🟢 Green Belt"
        ],
        "Community Material (اختياري)": [
          "ARM Architecture - 2 Modules, 28 Challenges",
          "Windows Warzone - 2 Modules, 17 Challenges",
          "Content Injection - 5 Modules, 10 Challenges",
          "Fuzz Dojo - 3 Modules, 15 Challenges",
          "Linux Firmware Rehosting - 3 Modules, 13 Challenges",
          "The Art of the Shell - 5 Modules, 55 Challenges"
        ]
      }
    },
    "4. Mobile Pentesting": {
      icon: "📱",
      color: "bg-green-500",
      modules: {
        "Android Pentesting": [
          "Mobile Application Fundamentals",
          "Lab Environment Setup (Genymotion/Android Studio)",
          "APK Analysis & Reverse Engineering",
          "Static Analysis (MobSF, Jadx, Apktool)",
          "Dynamic Analysis (Frida, Objection)",
          "SSL Pinning Bypass",
          "Insecure Data Storage",
          "Analyzing Network Traffic (Burp Suite)",
          "Firebase Database Security",
          "Storage Bucket Vulnerabilities",
          "Root Detection Bypass",
          "Mobile Malware Analysis"
        ],
        "iOS Pentesting": [
          "iOS Application Architecture",
          "Jailbreaking (iOS 16.x or less)",
          "iOS App Analysis Setup",
          "Binary Analysis (Mach-O)",
          "Objective-C Basics",
          "SSL Pinning Bypass (iOS)",
          "Keychain Analysis",
          "URL Scheme Exploitation",
          "Runtime Manipulation",
          "iOS Secure Coding Practices"
        ],
        "Recommended Certifications": [
          "PMPA - Practical Mobile Pentest Associate (TCM Security)",
          "eMAPT - Mobile Application Penetration Tester (INE)",
          "CAPT - Android Certified Penetration Tester (Mobile Hacking Lab)",
          "CMWAPT - Certified Mobile and Web App Penetration Tester (Infosec)"
        ]
      }
    },
    "5. Cloud Pentesting": {
      icon: "☁️",
      color: "bg-cyan-500",
      modules: {
        "AWS Cloud Pentesting": [
          "AWS Services Overview (EC2, S3, IAM, Lambda)",
          "AWS CLI & API Basics",
          "IAM Misconfigurations",
          "S3 Bucket Security Assessment",
          "EC2 Instance Exploitation",
          "Lambda Function Vulnerabilities",
          "CloudGoat Labs",
          "PACU Framework",
          "AWS Security Best Practices"
        ],
        "Azure Cloud Pentesting": [
          "Azure Services Overview",
          "Azure AD & IAM",
          "Azure CLI & PowerShell",
          "Storage Account Vulnerabilities",
          "Virtual Machine Exploitation",
          "Azure Functions Security",
          "AzureGoat Labs",
          "Microsoft 365 Security"
        ],
        "GCP Cloud Pentesting": [
          "GCP Services Overview",
          "GCP IAM & Identity",
          "GCP CLI (gcloud)",
          "Storage Bucket Security",
          "Compute Engine Exploitation",
          "Cloud Functions Vulnerabilities",
          "GCPGoat Labs",
          "GCP Security Best Practices"
        ],
        "Container & Kubernetes Security": [
          "Docker Security Assessment",
          "Kubernetes Architecture",
          "Container Escape Techniques",
          "Pod Security",
          "Service Mesh Security",
          "CI/CD Pipeline Vulnerabilities"
        ],
        "Recommended Certifications": [
          "GCPN - GIAC Cloud Penetration Tester (SANS SEC588)",
          "MCPT - MCSI Certified Cloud Penetration Tester",
          "AWS Certified Security - Specialty",
          "Azure Security Engineer Associate",
          "Google Professional Cloud Security Engineer"
        ],
        "Recommended Resources": [
          "Cloud Penetration Testing Book by Kim Crawley",
          "CloudGoat (AWS Labs)",
          "AWSGoat (INE/OWASP)",
          "AzureGoat Labs",
          "GCPGoat Labs"
        ]
      }
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleModule = (section, module) => {
    const key = `${section}-${module}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleItem = async (path) => {
    const newCompleted = {
      ...completedItems,
      [path]: !completedItems[path]
    };
    setCompletedItems(newCompleted);
    await saveData('completed', newCompleted);
  };

  const openNoteModal = (path) => {
    setCurrentNote({
      path,
      content: notes[path] || ''
    });
    setShowNoteModal(true);
  };

  const saveNote = async () => {
    const newNotes = {
      ...notes,
      [currentNote.path]: currentNote.content
    };
    setNotes(newNotes);
    await saveData('notes', newNotes);
    setShowNoteModal(false);
  };

  const deleteNote = async (path) => {
    const newNotes = { ...notes };
    delete newNotes[path];
    setNotes(newNotes);
    await saveData('notes', newNotes);
  };

  const calculateProgress = () => {
    const total = Object.values(curriculum).reduce((acc, section) => {
      return acc + Object.values(section.modules).reduce((modAcc, items) => modAcc + items.length, 0);
    }, 0);
    const completed = Object.values(completedItems).filter(Boolean).length;
    return { completed, total, percentage: Math.round((completed / total) * 100) };
  };

  const getSectionProgress = (section) => {
    const items = Object.values(section.modules).flat();
    const completed = items.filter(item => completedItems[`${section}-${item}`]).length;
    return { completed, total: items.length, percentage: Math.round((completed / items.length) * 100) };
  };

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            نظام تتبع مسار السيكيورتي الهجومية
          </h1>
          <p className="text-gray-400">من Beginner إلى Offensive Security Expert 🎯</p>
        </div>

        {/* Overall Progress */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-xl border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              <div>
                <h2 className="text-xl font-bold">التقدم الإجمالي</h2>
                <p className="text-gray-400 text-sm">{progress.completed} من {progress.total} مكتمل</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{progress.percentage}%</div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
        </div>

        {/* Curriculum Sections */}
        <div className="space-y-4">
          {Object.entries(curriculum).map(([sectionName, section]) => {
            const sectionProgress = getSectionProgress(section);
            return (
              <div key={sectionName} className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
                <div 
                  className="p-4 cursor-pointer hover:bg-gray-750 transition-colors flex items-center justify-between"
                  onClick={() => toggleSection(sectionName)}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`${section.color} p-3 rounded-lg text-2xl`}>
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{sectionName}</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="w-48 bg-gray-700 rounded-full h-2">
                          <div 
                            className={`${section.color} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${sectionProgress.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-400">
                          {sectionProgress.completed}/{sectionProgress.total}
                        </span>
                      </div>
                    </div>
                  </div>
                  {expandedSections[sectionName] ? <ChevronDown /> : <ChevronRight />}
                </div>

                {expandedSections[sectionName] && (
                  <div className="p-4 pt-0 space-y-3">
                    {Object.entries(section.modules).map(([moduleName, items]) => {
                      const moduleKey = `${sectionName}-${moduleName}`;
                      return (
                        <div key={moduleName} className="bg-gray-750 rounded-lg p-3">
                          <div 
                            className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded transition-colors"
                            onClick={() => toggleModule(sectionName, moduleName)}
                          >
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-5 h-5 text-cyan-400" />
                              <span className="font-semibold">{moduleName}</span>
                              <span className="text-xs text-gray-500">({items.length} عنصر)</span>
                            </div>
                            {expandedSections[moduleKey] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                          </div>

                          {expandedSections[moduleKey] && (
                            <div className="mt-3 space-y-2 pr-4">
                              {items.map((item, idx) => {
                                const itemPath = `${sectionName}-${moduleName}-${item}`;
                                const isCompleted = completedItems[itemPath];
                                const hasNote = notes[itemPath];

                                return (
                                  <div 
                                    key={idx}
                                    className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded transition-colors group"
                                  >
                                    <button
                                      onClick={() => toggleItem(itemPath)}
                                      className="flex-shrink-0"
                                    >
                                      {isCompleted ? (
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                      ) : (
                                        <Circle className="w-5 h-5 text-gray-600" />
                                      )}
                                    </button>
                                    <span className={`flex-1 ${isCompleted ? 'line-through text-gray-500' : ''}`}>
                                      {item}
                                    </span>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <button
                                        onClick={() => openNoteModal(itemPath)}
                                        className={`p-1 rounded hover:bg-gray-600 ${hasNote ? 'text-yellow-500' : 'text-gray-400'}`}
                                        title="ملاحظات"
                                      >
                                        <FileText className="w-4 h-4" />
                                      </button>
                                      {hasNote && (
                                        <button
                                          onClick={() => deleteNote(itemPath)}
                                          className="p-1 rounded hover:bg-red-600 text-red-400"
                                          title="حذف الملاحظة"
                                        >
                                          <Trash2 className="w-4 h-4" />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note Modal */}
        {showNoteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full border border-gray-700">
              <h3 className="text-xl font-bold mb-4">ملاحظاتك</h3>
              <textarea
                value={currentNote.content}
                onChange={(e) => setCurrentNote({ ...currentNote, content: e.target.value })}
                className="w-full h-48 bg-gray-900 border border-gray-600 rounded-lg p-3 text-white resize-none focus:outline-none focus:border-cyan-500"
                placeholder="اكتب ملاحظاتك، مفاهيم مهمة، أو روابط مفيدة..."
              />
              <div className="flex gap-3 mt-4">
                <button
                  onClick={saveNote}
                  className="flex-1 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  حفظ
                </button>
                <button
                  onClick={() => setShowNoteModal(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer Tips */}
        <div className="mt-8 bg-gradient-to-r from-purple-900 to-cyan-900 rounded-lg p-6 border border-purple-700">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-500" />
            نصائح للنجاح
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✅ اتبع الترتيب المذكور - كل مرحلة تبني على اللي قبلها</li>
            <li>✅ مارس في Labs بشكل عملي - النظري لوحده مش كافي</li>
            <li>✅ اكتب ملاحظاتك على كل موضوع مهم</li>
            <li>✅ انضم لـ Community (Discord, Reddit, Twitter) للتعلم من الآخرين</li>
            <li>✅ اعمل CTF Challenges بانتظام لتطبيق مهاراتك</li>
            <li>✅ وثق رحلتك على LinkedIn أو Blog شخصي</li>
          </ul>
        </div>
      </div>
    </div>
  );
}