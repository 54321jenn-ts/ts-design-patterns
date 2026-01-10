import { useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './Toolbar.css';

const pageTitles: Record<string, string> = {
  '/': 'Tetra Data Platform',
  '/data-table': 'My Data',
  '/search': 'Search',
  '/apps': 'Apps',
  '/contributing': 'Contributing',
};

interface ToolbarProps {
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}

function Toolbar({ isSidebarCollapsed, onToggleSidebar }: ToolbarProps) {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Page';
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="toolbar">
      <div className="toolbar-content">
        <div className="toolbar-left">
          <button
            className="sidebar-toggle-btn"
            onClick={onToggleSidebar}
            aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <h1 className="toolbar-title">{title}</h1>
        </div>
        <div className="toolbar-right">
          {/* Help Icon */}
          <button
            className="toolbar-icon-btn"
            aria-label="Help"
            onClick={() => console.log('Help clicked')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </button>

          {/* Account Icon with Dropdown */}
          <div className="account-dropdown-container" ref={dropdownRef}>
            <button
              className="toolbar-icon-btn"
              aria-label="Account"
              onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>

            {isAccountDropdownOpen && (
              <div className="account-dropdown">
                <div className="account-dropdown-header">
                  <div className="account-name">Marie Curie</div>
                  <div className="account-email">marie.curie@example.com</div>
                </div>
                <button className="account-dropdown-item" onClick={() => console.log('Profile clicked')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  My Account
                </button>
                <div className="account-dropdown-divider"></div>
                <button className="account-dropdown-item" onClick={() => console.log('Logout clicked')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;

