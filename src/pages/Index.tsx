import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DragDropOverlay } from "@/components/DragDropOverlay";
import { FileUploader } from "@/components/FileUploader";
import { RecentFiles } from "@/components/RecentFiles";
import { QuickAccessTools } from "@/components/QuickAccessTools";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white text-center">
          Audio/Video Converter & Editor
        </h1>
        <p className="text-center text-muted-foreground mt-2">
          Convert, trim, and enhance your media files with professional tools
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-[250px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-6">
          <Card className="h-[200px]">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Quick Access</CardTitle>
            </CardHeader>
            <CardContent>
              <QuickAccessTools />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Recent Files</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RecentFiles />
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <Card>
            <CardHeader className="pb-6">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Upload Media Files</CardTitle>
                <Button variant="outline" size="sm" className="text-muted-foreground">
                  Help & Tutorials
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <DragDropOverlay>
                <FileUploader />
              </DragDropOverlay>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}