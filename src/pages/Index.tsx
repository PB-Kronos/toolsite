import { FileUploader } from '../components/EditingTools/FileUploader'; 
import { TimelineEditor } from '../components/EditingTools/TimelineEditor'; 
import { EQControls } from '../components/EditingTools/EQControls'; 
import { PitchTempoControls } from '../components/EditingTools/PitchTempoControls'; 
import { MergeFadeControls } from '../components/EditingTools/MergeFadeControls'; 
import { ExportControls } from '../components/EditingTools/ExportControls'; 
import { PreviewPlayer } from '../components/EditingTools/PreviewPlayer'; 
import { HistoryPanel } from '../components/EditingTools/HistoryPanel'; 
import { AnalyticsPanel } from '../components/EditingTools/AnalyticsPanel'; 
import { SettingsPanel } from '../components/EditingTools/SettingsPanel'; 
import { HelpPanel } from '../components/EditingTools/HelpPanel'; 
import { RecentProjects } from '../components/EditingTools/RecentProjects'; 
import { WelcomePanel } from '../components/EditingTools/WelcomePanel'; 

function Index() { 
  return ( 
    <div className="container mx-auto p-4"> 
      <h1 className="text-3xl font-bold text-green-800 mb-6">Audio/Video Editor</h1> 
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <WelcomePanel />
          <FileUploader />
          <TimelineEditor />
          <PreviewPlayer />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <EQControls />
            <PitchTempoControls />
            <MergeFadeControls />
            <ExportControls />
          </div>
        </div>
        <div className="space-y-6">
          <HistoryPanel />
          <AnalyticsPanel />
          <SettingsPanel />
          <HelpPanel />
          <RecentProjects />
        </div>
      </div>
    </div> 
  ); 
} 

export default Index;