import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Trash2, AlertTriangle, Shield, Check, Lock, ChevronRight, Info } from "lucide-react";
import { APP_URL } from "@/lib/constants";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function DeleteAccount() {
  // In a real implementation, we would check if the user is authenticated here.
  // Since this is the marketing site, we assume they are not logged in and redirect them to the app.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const dataCategories = [
    { id: "saved_places", label: "Saved places / favourites", description: "All lists and saved venues" },
    { id: "search_history", label: "Search history", description: "Recent searches and location history" },
    { id: "reviews", label: "Reviews and notes", description: "Your contributions to the community" },
    { id: "preferences", label: "Profile preferences", description: "Dietary needs, accessibility settings, and interests" },
    { id: "partner_links", label: "Partner links / Circle memberships", description: "Connections with other users" },
  ];

  const toggleCategory = (id: string) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(c => c !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handlePartialDeletion = () => {
    if (selectedCategories.length === 0) {
      toast({
        title: "No data selected",
        description: "Please select at least one category to delete.",
        variant: "destructive",
      });
      return;
    }

    setIsDeleting(true);
    // Simulate API call
    setTimeout(() => {
      setIsDeleting(false);
      setSelectedCategories([]);
      toast({
        title: "Request Submitted",
        description: "Your data deletion request has been processed.",
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-slate-50 py-12 md:py-20">
        <div className="container-width max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Delete your FamPal account or data
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              You can permanently delete your account, or delete specific data without removing your account.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1: Delete Account Instructions */}
            <Card className="border-slate-200 shadow-sm overflow-hidden">
              <CardHeader className="bg-red-50 border-b border-red-100">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Trash2 className="text-red-600 w-5 h-5" />
                  </div>
                  <CardTitle className="text-red-900">Delete your account in the app</CardTitle>
                </div>
                <CardDescription className="text-red-700">
                  This action is permanent and cannot be undone.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="space-y-4 list-decimal list-inside text-slate-700">
                  <li className="pl-2"><span className="font-medium">Open the FamPal app</span> (app.fampal.co.za)</li>
                  <li className="pl-2">Go to <span className="font-medium">Profile</span></li>
                  <li className="pl-2">Select <span className="font-medium">Delete Account</span> (usually at the bottom of settings)</li>
                  <li className="pl-2">Type <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-sm">DELETE</span> to confirm</li>
                  <li className="pl-2">Confirm deletion</li>
                </ol>

                <div className="mt-6 flex justify-center md:justify-start">
                  <Button variant="destructive" asChild>
                    <a href={`${APP_URL}/profile`} target="_blank" rel="noopener noreferrer">
                      Go to App to Delete Account
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Section 2 & 3: What gets deleted / retained */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-slate-200 shadow-sm h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trash2 className="w-5 h-5 text-slate-400" />
                    What gets deleted
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "User profile and sign-in access",
                      "Saved places and favourites",
                      "Reviews/notes you created",
                      "Partner/circle links and shared spaces",
                      "Smart Insights usage history and preferences"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-slate-400" />
                    What may be retained
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <Lock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <span>Limited data for legal compliance, fraud prevention, and security auditing.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>Retained only as required by law or for a limited period to prevent abuse.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Section 4: Manage My Data */}
            <div className="pt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Manage my data</h2>
              </div>

              <Card className="bg-slate-900 text-white border-0 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <CardContent className="pt-10 pb-10 text-center relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Log in to manage your data</h3>
                  <p className="text-slate-300 max-w-md mx-auto mb-8">
                    To delete specific categories of data without deleting your entire account, you need to verify your identity securely in the FamPal app.
                  </p>
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 rounded-full" asChild>
                    <a href={`${APP_URL}/settings/data`} target="_blank" rel="noopener noreferrer">
                      Log in to Manage Data
                    </a>
                  </Button>
                  <p className="mt-4 text-xs text-slate-500">
                    Redirects to secure login portal
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center pt-8 border-t border-slate-200">
              <p className="text-slate-500 mb-2">Need help?</p>
              <a href="mailto:support@fampal.co.za" className="text-blue-600 font-medium hover:underline">
                support@fampal.co.za
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
