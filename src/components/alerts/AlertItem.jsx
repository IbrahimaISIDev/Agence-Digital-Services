// components/alerts/AlertItem.jsx
import { Alert, AlertDescription, AlertTitle } from "../ui/Alert";
import { Info, AlertTriangle, AlertCircle } from "lucide-react";

export const AlertItem = ({ type = "info", title, message }) => {
  const icons = {
    info: <Info className="h-4 w-4" />,
    warning: <AlertTriangle className="h-4 w-4" />,
    error: <AlertCircle className="h-4 w-4" />
  };

  const variants = {
    info: "text-blue-700 bg-blue-50",
    warning: "text-yellow-700 bg-yellow-50",
    error: "text-red-700 bg-red-50"
  };

  return (
    <Alert className={variants[type]}>
      <div className="flex items-center gap-2">
        {icons[type]}
        {title && <AlertTitle>{title}</AlertTitle>}
      </div>
      <AlertDescription className="mt-2">{message}</AlertDescription>
    </Alert>
  );
};