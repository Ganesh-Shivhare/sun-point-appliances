import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Shield, Users, FileText, Eye, Trash2 } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Privacy Policy & Terms of Service
              </h1>
              <p className="text-xl text-gray-600">
                At Sunpoint Appliances (AKBARALLYS), we are committed to protecting your privacy and ensuring transparency in how we use your information.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Privacy Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  By accessing our website, store, or services, you agree to the practices described in this Privacy Policy and Terms of Service.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">We may collect the following types of information:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Personal Information:</strong> Name, email, phone number, and communication preferences.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Transactional Information:</strong> Order details, billing, and payment information.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Usage Data:</strong> Interactions with our website, mobile, or digital platforms.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Your information helps us:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>Process your purchases and provide customer support.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>Share important service-related notifications (warranty, product recalls, etc.).</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>Deliver promotional offers, deals, and updates (only if you consent).</div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Notification and Communication Consent */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">3. Notification and Communication Consent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  By accepting this policy, you acknowledge and consent to receive notifications and promotional communications from us through various channels, including but not limited to:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Email', 'SMS', 'WhatsApp', 'RCS (Rich Communication Services)', 'Mobile push notifications', 'Other digital platforms'].map((channel) => (
                    <div key={channel} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm font-medium">{channel}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 text-sm">
                  If you do not wish to receive such updates, you may opt out at any time by contacting us at{' '}
                  <a href="mailto:info@sunpointappliances.in" className="text-blue-600 hover:underline">
                    info@sunpointappliances.in
                  </a>{' '}
                  or using the opt-out method mentioned in our messages (e.g., replying "STOP" to RCS).
                </p>
              </CardContent>
            </Card>

            {/* Customer Consent Form */}
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">4. Customer Consent for RCS & Marketing Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                  <Checkbox id="marketing-consent" className="mt-1" />
                  <div>
                    <label htmlFor="marketing-consent" className="text-sm font-medium text-gray-900 cursor-pointer">
                      Yes, I would like to receive marketing updates and offers from Sunpoint Appliances via Email, SMS, and RCS.
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      By checking this box, you agree to our Privacy Policy and Terms of Service. You can opt out at any time by following the instructions in our messages or by contacting us directly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection & Security */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">5. Data Protection & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We use appropriate security measures to safeguard your personal information from unauthorized access, misuse, or disclosure.
                </p>
              </CardContent>
            </Card>

            {/* Sharing of Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">6. Sharing of Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We never sell your data. Your details may only be shared with trusted third-party service providers who help us deliver products, services, and communications.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">7. Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong className="text-sm">Access</strong>
                      <p className="text-sm text-gray-600">Access the personal data we hold about you.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <FileText className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong className="text-sm">Correction</strong>
                      <p className="text-sm text-gray-600">Request correction or deletion of your data.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <Users className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <strong className="text-sm">Withdraw</strong>
                      <p className="text-sm text-gray-600">Withdraw consent for marketing communications.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms of Service */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">8. Terms of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Use of Services:</strong> By using our website or store, you agree to comply with all applicable laws and these Terms.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Product Information:</strong> We strive for accuracy but do not guarantee that product descriptions, pricing, or availability are error-free.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Liability:</strong> Sunpoint Appliances is not liable for indirect or incidental damages arising from the use of our services.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Changes to Terms:</strong> We may update this policy from time to time. Updates will be posted on this page with a revised "last updated" date.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900">9. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <div>
                      <strong>Sunpoint Appliances (AKBARALLYS)</strong>
                      <p className="text-sm text-gray-600">
                        15 Sakar VII, Nehru Bridge Corner, Ashram Rd, opposite Patang Hotel, Ahmedabad, Gujarat 380009
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <a href="tel:+917926580157" className="text-green-600 hover:underline">
                      +91 79 2658 0157
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <a href="mailto:info@sunpointappliances.in" className="text-green-600 hover:underline">
                      info@sunpointappliances.in
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 