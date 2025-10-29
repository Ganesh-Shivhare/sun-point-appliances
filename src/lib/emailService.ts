interface EmailData {
  name: string;
  phone: string;
  email: string;
}

interface BrevoEmailResponse {
  messageId: string;
}

// Send email function using Brevo API
export const sendUserInfoEmail = async (userData: EmailData): Promise<boolean> => {
  try {
    const apiKey = import.meta.env.VITE_BREVO_API_KEY;
    
    if (!apiKey) {
      console.error('VITE_BREVO_API_KEY is not defined in environment variables');
      return false;
    }

    // Validate required fields
    if (!userData.name || !userData.phone || !userData.email) {
      console.error('Name, phone, and email are required');
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      console.error('Invalid email format');
      return false;
    }

    const toEmail = import.meta.env.VITE_TO_EMAIL;
    const fromEmail = import.meta.env.VITE_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      console.error('VITE_TO_EMAIL and VITE_FROM_EMAIL must be defined in environment variables');
      return false;
    }

    // Validate sender email format
    const senderEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!senderEmailRegex.test(fromEmail)) {
      console.error('Invalid sender email format:', fromEmail);
      return false;
    }

    console.log('📧 Email configuration:', {
      fromEmail,
      toEmail,
      apiKeyPresent: !!apiKey
    });

    const emailData = {
      sender: {
        name: "Sun Point Appliances",
        email: fromEmail
      },
      to: [
        {
          email: toEmail,
          name: "Store Owner"
        }
      ],
      subject: "🎉 New Customer Inquiry - Sun Point Appliances (AKBARALLYS)",
      htmlContent: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New User Registration</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #f8fafc;
                    color: #334155;
                }
                
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .email-header {
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                    color: white;
                    padding: 30px;
                    text-align: center;
                }
                
                .email-header h1 {
                    margin: 0;
                    font-size: 28px;
                    font-weight: 700;
                }
                
                .email-header p {
                    margin: 8px 0 0 0;
                    font-size: 16px;
                    opacity: 0.9;
                }
                
                .email-body {
                    padding: 40px 30px;
                }
                
                .alert-box {
                    background-color: #dcfce7;
                    border: 1px solid #bbf7d0;
                    border-radius: 8px;
                    padding: 20px;
                    margin-bottom: 30px;
                    display: flex;
                    align-items: center;
                }
                
                .alert-icon {
                    width: 24px;
                    height: 24px;
                    background-color: #16a34a;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 12px;
                    color: white;
                    font-weight: bold;
                }
                
                .alert-text {
                    color: #15803d;
                    font-weight: 600;
                    margin: 0;
                }
                
                .user-details {
                    background-color: #f8fafc;
                    border-radius: 8px;
                    padding: 25px;
                    margin: 20px 0;
                }
                
                .user-details h3 {
                    margin: 0 0 20px 0;
                    color: #1e293b;
                    font-size: 18px;
                    border-bottom: 2px solid #e2e8f0;
                    padding-bottom: 10px;
                }
                
                .detail-row {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                    padding: 10px 0;
                }
                
                .detail-row:last-child {
                    margin-bottom: 0;
                }
                
                .detail-icon {
                    width: 40px;
                    height: 40px;
                    background-color: #3b82f6;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 15px;
                    color: white;
                }
                
                .detail-content {
                    flex: 1;
                }
                
                .detail-label {
                    font-size: 12px;
                    font-weight: 600;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin: 0 0 4px 0;
                }
                
                .detail-value {
                    font-size: 16px;
                    font-weight: 500;
                    color: #1e293b;
                    margin: 0;
                }
                
                .timestamp {
                    background-color: #fffbeb;
                    border: 1px solid #fed7aa;
                    border-radius: 6px;
                    padding: 12px;
                    text-align: center;
                    margin: 20px 0;
                    color: #92400e;
                    font-size: 14px;
                }
                
                .email-footer {
                    background-color: #f1f5f9;
                    padding: 30px;
                    text-align: center;
                    border-top: 1px solid #e2e8f0;
                }
                
                .email-footer p {
                    margin: 0;
                    color: #64748b;
                    font-size: 14px;
                }
                
                .brand-name {
                    color: #3b82f6;
                    font-weight: 600;
                }
                
                @media (max-width: 600px) {
                    .email-container {
                        margin: 10px;
                        border-radius: 8px;
                    }
                    
                    .email-header,
                    .email-body,
                    .email-footer {
                        padding: 20px;
                    }
                    
                    .detail-row {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    
                    .detail-icon {
                        margin-bottom: 10px;
                        margin-right: 0;
                    }
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="email-header">
                    <h1>🎉 New Customer Inquiry</h1>
                    <p>Sun Point Appliances (AKBARALLYS)</p>
                </div>
                
                <div class="email-body">
                    <div class="alert-box">
                        <div class="alert-icon">✓</div>
                        <p class="alert-text">A new customer has submitted an inquiry on your website and is interested in your premium home appliances</p>
                    </div>
                    
                    <div class="user-details">
                        <h3>👤 Customer Information</h3>
                        
                        <div class="detail-row">
                            <div class="detail-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                            </div>
                            <div class="detail-content">
                                <p class="detail-label">Full Name</p>
                                <p class="detail-value">${userData.name}</p>
                            </div>
                        </div>
                        
                        <div class="detail-row">
                            <div class="detail-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                            </div>
                            <div class="detail-content">
                                <p class="detail-label">Email Address</p>
                                <p class="detail-value">${userData.email}</p>
                            </div>
                        </div>
                        
                        <div class="detail-row">
                            <div class="detail-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                            </div>
                            <div class="detail-content">
                                <p class="detail-label">Phone Number</p>
                                <p class="detail-value">${userData.phone}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="timestamp">
                        📅 Inquiry Date: ${new Date().toLocaleString('en-IN', { 
                          timeZone: 'Asia/Kolkata',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit'
                        })}
                    </div>
                </div>
            </div>
        </body>
        </html>
      `
    };

    console.log('Sending email via Brevo API:', {
      url: 'https://api.brevo.com/v3/smtp/email',
      hasApiKey: !!apiKey,
      fromEmail,
      toEmail,
      subject: emailData.subject,
      messageId: 'Will be generated after successful send'
    });

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      return false;
    }

    const result: BrevoEmailResponse = await response.json();
    console.log('Email sent successfully via Brevo:', {
      messageId: result.messageId,
      fromEmail,
      toEmail,
      subject: emailData.subject,
      timestamp: new Date().toISOString()
    });
    
    // Additional debugging info
    console.log('📧 Email delivery info:', {
      'Message ID': result.messageId,
      'From': fromEmail,
      'To': toEmail,
      'Subject': emailData.subject,
      'Status': 'Accepted by Brevo - Check spam folder if not received',
      'Brevo Relay': 'smtp-relay.mailin.fr'
    });
    
    return true;

  } catch (error) {
    console.error('Error sending email via Brevo:', error);
    return false;
  }
};

// Test function to verify email delivery
export const testEmailDelivery = async (): Promise<boolean> => {
  const testData: EmailData = {
    name: "Test User",
    phone: "1234567890",
    email: "test@example.com"
  };
  
  console.log('🧪 Testing email delivery...');
  return await sendUserInfoEmail(testData);
}; 