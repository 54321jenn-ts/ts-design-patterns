import Breadcrumbs from './Breadcrumbs';
import './SecondaryToolbar.css';

// Placeholder icon components
const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const SortIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 5h10"></path>
    <path d="M11 9h7"></path>
    <path d="M11 13h4"></path>
    <path d="M3 17l3 3 3-3"></path>
    <path d="M6 18V4"></path>
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);


function SecondaryToolbar() {
  return (
    <div className="secondary-toolbar">
      <div className="secondary-toolbar-content">
        <div className="secondary-toolbar-left">
          <Breadcrumbs />
        </div>
        {/* Icons hidden for now - will expose later when more detailed
        <div className="secondary-toolbar-right">
          <button className="secondary-toolbar-icon-btn" aria-label="Filter" title="Filter">
            <FilterIcon />
          </button>
          <button className="secondary-toolbar-icon-btn" aria-label="Sort" title="Sort">
            <SortIcon />
          </button>
          <button className="secondary-toolbar-icon-btn" aria-label="Download" title="Download">
            <DownloadIcon />
          </button>
        </div>
        */}
      </div>
    </div>
  );
}

export default SecondaryToolbar;

