import React from 'react';
import { 
  MessageSquare, 
  Settings, 
  Menu,
  X,
  Code,
  Rocket
} from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection, isCollapsed, setIsCollapsed }) => {
  const sidebarItems = [
    { id: 'chat', label: 'AI Chat', icon: MessageSquare },
    { id: 'code', label: 'Code Editor', icon: Code },
    { id: 'deploy', label: 'Deploy', icon: Rocket },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className={`bg-white dark:bg-gray-800 h-full transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} border-r border-gray-200 dark:border-gray-700 shadow-sm`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        {!isCollapsed && (
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-blue-500" />
            Workspace
          </h3>
        )}
        <button 
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <Menu className="w-4 h-4 text-gray-600 dark:text-gray-300" /> : <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col p-4 space-y-2">
        {sidebarItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 ${
                isActive 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } ${isCollapsed ? 'justify-center px-2' : ''}`}
              title={isCollapsed ? item.label : ''}
            >
              <IconComponent className="w-4 h-4 flex-shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
