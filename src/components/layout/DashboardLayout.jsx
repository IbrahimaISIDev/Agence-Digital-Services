// components/layout/DashboardLayout.jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const DashboardLayout = ({ children, tabs }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestion Agence Multi-Services</h1>
      <Tabs defaultValue={tabs[0].value} className="space-y-4">
        <TabsList>
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {children}
      </Tabs>
    </div>
  );
};