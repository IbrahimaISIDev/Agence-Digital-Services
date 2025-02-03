// src/components/layout/DashboardLayout.jsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { NAVIGATION_CONFIG } from "../../routes/config";

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Détermine l'onglet actif en fonction de l'URL actuelle
  const currentTab = NAVIGATION_CONFIG.find(
    tab => tab.path === location.pathname
  )?.value || NAVIGATION_CONFIG[0].value;

  // Gère le changement d'onglet
  const handleTabChange = (newValue) => {
    const route = NAVIGATION_CONFIG.find(tab => tab.value === newValue)?.path;
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestion Agence Multi-Services</h1>
      
      <Tabs value={currentTab} onValueChange={handleTabChange} className="space-y-4">
        <TabsList>
          {NAVIGATION_CONFIG.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {/* Envelopper le contenu dans TabsContent pour chaque route */}
        {NAVIGATION_CONFIG.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            {currentTab === tab.value && <Outlet />}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}