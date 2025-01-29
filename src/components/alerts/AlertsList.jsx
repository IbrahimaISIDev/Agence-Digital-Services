// components/alerts/AlertsList.jsx
import { Alert, AlertDescription } from "@/components/ui/alert";

export const AlertsList = ({ alerts }) => {
  if (!alerts.length) return null;
  
  return (
    <div className="space-y-2 mb-4">
      {alerts.map((alert, index) => (
        <Alert key={index}>
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
};