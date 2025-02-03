// components/layout/Sidebar.jsx
import { useState } from 'react';
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";
import {
  Home,
  BarChart2,
  Users,
  FileText,
  CreditCard,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Tableau de bord', href: '/' },
  { icon: BarChart2, label: 'Statistiques', href: '/stats' },
  { icon: Users, label: 'Clients', href: '/clients' },
  { icon: FileText, label: 'Rapports', href: '/reports' },
  { icon: CreditCard, label: 'Transactions', href: '/transactions' },
];

export const Sidebar = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('/');

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-white border-r transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && (
          <span className="font-bold text-xl">AgenceApp</span>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map((item) => (
          <Button
            key={item.href}
            variant={activeItem === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              collapsed ? "px-2" : "px-4"
            )}
            onClick={() => setActiveItem(item.href)}
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && (
              <span className="ml-3">{item.label}</span>
            )}
          </Button>
        ))}
      </nav>

      <div className="p-2 border-t space-y-1">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start",
            collapsed ? "px-2" : "px-4"
          )}
        >
          <Settings className="h-5 w-5" />
          {!collapsed && (
            <span className="ml-3">Paramètres</span>
          )}
        </Button>
        
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start",
            collapsed ? "px-2" : "px-4"
          )}
        >
          <HelpCircle className="h-5 w-5" />
          {!collapsed && (
            <span className="ml-3">Aide</span>
          )}
        </Button>
      </div>
    </div>
  );
};