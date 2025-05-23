"use client"
import { MapPin } from "lucide-react"

interface GoogleMapComponentProps {
  height?: string
  isDarkMode?: boolean
  showInfoWindow?: boolean
}

export default function GoogleMapComponent({
  height = "100%",
  isDarkMode = false,
  showInfoWindow = false,
}: GoogleMapComponentProps) {
  // Create a fallback map component that doesn't rely on the Google Maps API
  return (
    <div
      style={{ height, width: "100%" }}
      className={`rounded-lg overflow-hidden flex items-center justify-center ${
        isDarkMode ? "bg-slate-800" : "bg-slate-200"
      }`}
    >
      <div className="text-center p-4">
        <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
        <p className="font-medium">Youngmin Ju | Data Scientist & Economist</p>
        <p className="text-sm text-muted-foreground">3855 W 7th St, Los Angeles, CA 90005</p>
        {showInfoWindow && (
          <a
            href="https://maps.google.com/?q=3855+W+7th+St,+Los+Angeles,+CA+90005"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-primary hover:underline"
          >
            View on Google Maps
          </a>
        )}
      </div>
    </div>
  )
}
