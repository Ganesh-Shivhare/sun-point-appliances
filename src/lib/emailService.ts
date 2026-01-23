interface EmailData {
  name: string;
  phone: string;
  email: string;
  question?: string;
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

    const companyName = "Sun Point Appliances (AKBARALLYS)";
    const inquiryDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
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
          <title>New Customer Inquiry</title>
        </head>
        <body style="margin: 0; padding: 20px; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 580px; margin: 0 auto; width: 100%;">
            
            <!-- Header -->
            <tr>
              <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); border-radius: 12px 12px 0 0; padding: 32px 24px; text-align: center;">
                <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                  🎉 New Customer Inquiry
                </h1>
                <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                  ${companyName}
                </p>
              </td>
            </tr>

            <!-- Body Container -->
            <tr>
              <td style="background-color: #ffffff; padding: 0 16px 24px 16px;">
                
                <!-- Success Message -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin-top: 24px;">
                  <tr>
                    <td style="background-color: rgba(34, 197, 94, 0.1); border-left: 4px solid #22c55e; border-radius: 0 8px 8px 0; padding: 16px 20px;">
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="vertical-align: top; padding-right: 8px;">
                            <span style="color: #22c55e; font-weight: 700; font-size: 16px;">✓</span>
                          </td>
                          <td style="color: #1a1a2e; font-size: 14px; line-height: 1.5;">
                            A new customer has submitted an inquiry on your website and is interested in your premium home appliances
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Customer Information Card -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin-top: 24px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                  
                  <!-- Card Header -->
                  <tr>
                    <td style="background-color: #ffffff; padding: 16px 24px; border-bottom: 1px solid #e5e5e5;">
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width: 24px; height: 24px; background-color: rgba(30, 58, 95, 0.1); border-radius: 50%; text-align: center; vertical-align: middle; font-size: 12px;">
                            👤
                          </td>
                          <td style="padding-left: 8px; color: #1a1a2e; font-weight: 600; font-size: 16px;">
                            Customer Information
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Card Body -->
                  <tr>
                    <td style="background-color: #ffffff; padding: 24px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                        
                        <!-- Full Name -->
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="width: 40px; height: 40px; background-color: rgba(30, 58, 95, 0.1); border-radius: 8px; text-align: center; vertical-align: middle;">
                                  <span style="color: #1e3a5f; font-weight: 700; font-size: 14px;">N</span>
                                </td>
                                <td style="padding-left: 16px; vertical-align: top;">
                                  <p style="margin: 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">
                                    FULL NAME
                                  </p>
                                  <p style="margin: 4px 0 0 0; color: #1a1a2e; font-weight: 500; font-size: 15px;">
                                    ${userData.name}
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- Email Address -->
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="width: 40px; height: 40px; background-color: rgba(30, 58, 95, 0.1); border-radius: 8px; text-align: center; vertical-align: middle;">
                                  <span style="color: #1e3a5f; font-weight: 700; font-size: 14px;">@</span>
                                </td>
                                <td style="padding-left: 16px; vertical-align: top;">
                                  <p style="margin: 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">
                                    EMAIL ADDRESS
                                  </p>
                                  <a href="mailto:${userData.email}" style="display: block; margin: 4px 0 0 0; color: #1e3a5f; font-weight: 500; font-size: 15px; text-decoration: none;">
                                    ${userData.email}
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- Phone Number -->
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="width: 40px; height: 40px; background-color: rgba(30, 58, 95, 0.1); border-radius: 8px; text-align: center; vertical-align: middle;">
                                  <span style="font-size: 16px;">📞</span>
                                </td>
                                <td style="padding-left: 16px; vertical-align: top;">
                                  <p style="margin: 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">
                                    PHONE NUMBER
                                  </p>
                                  <p style="margin: 4px 0 0 0; color: #1a1a2e; font-weight: 500; font-size: 15px;">
                                    ${userData.phone}
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- Question / Query -->
                        ${userData.question && userData.question.trim() ? `
                        <tr>
                          <td>
                            <table role="presentation" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="width: 40px; height: 40px; background-color: rgba(245, 158, 11, 0.2); border-radius: 8px; text-align: center; vertical-align: middle;">
                                  <span style="color: #f59e0b; font-weight: 700; font-size: 16px;">?</span>
                                </td>
                                <td style="padding-left: 16px; vertical-align: top;">
                                  <p style="margin: 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">
                                    QUESTION / QUERY
                                  </p>
                                  <p style="margin: 4px 0 0 0; color: #1a1a2e; font-weight: 500; font-size: 15px; line-height: 1.5;">
                                    ${userData.question}
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        ` : ""}

                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Footer -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin-top: 24px;">
                  <tr>
                    <td style="background-color: #fef3c7; border-radius: 12px; padding: 16px 20px; text-align: center;">
                      <p style="margin: 0; color: #f59e0b; font-size: 14px;">
                        📅 Inquiry Date: ${inquiryDate}
                      </p>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

          </table>
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