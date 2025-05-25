import React from 'react';
import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  ClipboardList, 
  BarChart2, 
  TestTube2,
  MessageSquare,
  HelpCircle,
  Settings
} from 'lucide-react';
import { navLinks } from '../../data/navigation';

const Sidebar: React.FC = () => {
  // Map icon names to Lucide React components
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      LayoutDashboard: <LayoutDashboard size={20} />,
      History: <History size={20} />,
      Calendar: <Calendar size={20} />,
      ClipboardList: <ClipboardList size={20} />,
      BarChart2: <BarChart2 size={20} />,
      TestTube2: <TestTube2 size={20} />,
      MessageSquare: <MessageSquare size={20} />,
      HelpCircle: <HelpCircle size={20} />,
      Settings: <Settings size={20} />
    };
    return iconMap[iconName] || <div className="w-5 h-5" />;
  };

  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-6">
        <h1 className="text-xl font-semibold">
          <span className="text-secondary-500">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            General
          </p>
        </div>
        <ul className="mt-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href="#"
                className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg mx-2 ${
                  link.active
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className={`mr-3 ${link.active ? 'text-primary-600' : 'text-gray-500'}`}>
                  {getIcon(link.icon)}
                </span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-4 py-2 mt-6">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Tools
          </p>
        </div>
        <ul className="mt-2">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg mx-2"
            >
              <span className="mr-3 text-gray-500">
                <MessageSquare size={20} />
              </span>
              Chat
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg mx-2"
            >
              <span className="mr-3 text-gray-500">
                <HelpCircle size={20} />
              </span>
              Support
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <a
          href="#"
          className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
        >
          <span className="mr-3 text-gray-500">
            <Settings size={20} />
          </span>
          Setting
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;