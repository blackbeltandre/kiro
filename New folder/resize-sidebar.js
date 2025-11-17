// ========================================
// RESIZABLE SIDEBAR FUNCTIONALITY
// ========================================
// VS Code-style draggable sidebar resize

// Configuration
const MIN_SIDEBAR_WIDTH = 200;  // Minimum width in pixels
const MAX_SIDEBAR_WIDTH = 600;  // Maximum width in pixels
const DEFAULT_LEFT_WIDTH = 256; // Default left sidebar width (w-64)
const DEFAULT_RIGHT_WIDTH = 320; // Default right sidebar width (w-80)

// State
let isResizing = false;
let currentResizer = null;
let startX = 0;
let startWidth = 0;
let targetSidebar = null;

/**
 * Initialize resizable sidebars
 * Call this function when DOM is loaded
 */
function initResizableSidebars() {
    const leftSidebar = document.querySelector('.left-sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');
    
    if (!leftSidebar || !rightSidebar) {
        console.warn('Sidebars not found. Resize functionality disabled.');
        return;
    }
    
    // Load saved widths from localStorage
    const savedLeftWidth = localStorage.getItem('leftSidebarWidth');
    const savedRightWidth = localStorage.getItem('rightSidebarWidth');
    
    if (savedLeftWidth) {
        leftSidebar.style.width = savedLeftWidth + 'px';
    }
    
    if (savedRightWidth) {
        rightSidebar.style.width = savedRightWidth + 'px';
    }
    
    // Create resize handles
    createResizeHandle(leftSidebar, 'right');
    createResizeHandle(rightSidebar, 'left');
    
    // Add global event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    console.log('✅ Resizable sidebars initialized');
}

/**
 * Create resize handle for a sidebar
 * @param {HTMLElement} sidebar - The sidebar element
 * @param {string} position - 'left' or 'right'
 */
function createResizeHandle(sidebar, position) {
    // Check if handle already exists
    const existingHandle = sidebar.querySelector('.resize-handle');
    if (existingHandle) {
        existingHandle.remove();
    }
    
    const handle = document.createElement('div');
    handle.className = `resize-handle resize-handle-${position}`;
    handle.dataset.position = position;
    
    // Add mousedown event
    handle.addEventListener('mousedown', (e) => handleMouseDown(e, sidebar, position));
    
    // Add to sidebar
    if (position === 'right') {
        sidebar.appendChild(handle);
    } else {
        sidebar.insertBefore(handle, sidebar.firstChild);
    }
}

/**
 * Handle mouse down on resize handle
 * @param {MouseEvent} e - Mouse event
 * @param {HTMLElement} sidebar - Target sidebar
 * @param {string} position - 'left' or 'right'
 */
function handleMouseDown(e, sidebar, position) {
    e.preventDefault();
    
    isResizing = true;
    currentResizer = e.target;
    targetSidebar = sidebar;
    startX = e.clientX;
    startWidth = sidebar.offsetWidth;
    
    // Add resizing class to body
    document.body.classList.add('resizing');
    
    // Add visual feedback
    currentResizer.style.backgroundColor = 'rgba(139, 92, 246, 0.6)';
}

/**
 * Handle mouse move during resize
 * @param {MouseEvent} e - Mouse event
 */
function handleMouseMove(e) {
    if (!isResizing || !targetSidebar) return;
    
    e.preventDefault();
    
    const position = currentResizer.dataset.position;
    let newWidth;
    
    if (position === 'right') {
        // Left sidebar - dragging right edge
        const delta = e.clientX - startX;
        newWidth = startWidth + delta;
    } else {
        // Right sidebar - dragging left edge
        const delta = startX - e.clientX;
        newWidth = startWidth + delta;
    }
    
    // Constrain width
    newWidth = Math.max(MIN_SIDEBAR_WIDTH, Math.min(MAX_SIDEBAR_WIDTH, newWidth));
    
    // Apply new width
    targetSidebar.style.width = newWidth + 'px';
    
    // Update cursor
    document.body.style.cursor = 'col-resize';
}

/**
 * Handle mouse up to end resize
 * @param {MouseEvent} e - Mouse event
 */
function handleMouseUp(e) {
    if (!isResizing) return;
    
    e.preventDefault();
    
    // Save width to localStorage
    const finalWidth = targetSidebar.offsetWidth;
    const sidebarClass = targetSidebar.classList.contains('left-sidebar') ? 'left' : 'right';
    
    if (sidebarClass === 'left') {
        localStorage.setItem('leftSidebarWidth', finalWidth);
    } else {
        localStorage.setItem('rightSidebarWidth', finalWidth);
    }
    
    // Remove resizing state
    isResizing = false;
    document.body.classList.remove('resizing');
    document.body.style.cursor = '';
    
    // Remove visual feedback
    if (currentResizer) {
        currentResizer.style.backgroundColor = '';
    }
    
    currentResizer = null;
    targetSidebar = null;
    
    console.log(`📏 Sidebar resized to ${finalWidth}px`);
}

/**
 * Reset sidebar widths to default
 */
function resetSidebarWidths() {
    const leftSidebar = document.querySelector('.left-sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');
    
    if (leftSidebar) {
        leftSidebar.style.width = DEFAULT_LEFT_WIDTH + 'px';
        localStorage.setItem('leftSidebarWidth', DEFAULT_LEFT_WIDTH);
    }
    
    if (rightSidebar) {
        rightSidebar.style.width = DEFAULT_RIGHT_WIDTH + 'px';
        localStorage.setItem('rightSidebarWidth', DEFAULT_RIGHT_WIDTH);
    }
    
    console.log('🔄 Sidebar widths reset to default');
}

/**
 * Toggle sidebar visibility
 * @param {string} side - 'left' or 'right'
 */
function toggleSidebar(side) {
    const sidebar = document.querySelector(`.${side}-sidebar`);
    if (!sidebar) return;
    
    const isHidden = sidebar.style.display === 'none';
    
    if (isHidden) {
        sidebar.style.display = 'flex';
        localStorage.setItem(`${side}SidebarVisible`, 'true');
    } else {
        sidebar.style.display = 'none';
        localStorage.setItem(`${side}SidebarVisible`, 'false');
    }
    
    console.log(`👁️ ${side} sidebar ${isHidden ? 'shown' : 'hidden'}`);
}

/**
 * Get current sidebar width
 * @param {string} side - 'left' or 'right'
 * @returns {number} Width in pixels
 */
function getSidebarWidth(side) {
    const sidebar = document.querySelector(`.${side}-sidebar`);
    return sidebar ? sidebar.offsetWidth : 0;
}

/**
 * Set sidebar width programmatically
 * @param {string} side - 'left' or 'right'
 * @param {number} width - Width in pixels
 */
function setSidebarWidth(side, width) {
    const sidebar = document.querySelector(`.${side}-sidebar`);
    if (!sidebar) return;
    
    // Constrain width
    width = Math.max(MIN_SIDEBAR_WIDTH, Math.min(MAX_SIDEBAR_WIDTH, width));
    
    sidebar.style.width = width + 'px';
    localStorage.setItem(`${side}SidebarWidth`, width);
    
    console.log(`📏 ${side} sidebar set to ${width}px`);
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

/**
 * Initialize keyboard shortcuts for sidebar control
 */
function initSidebarKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + B: Toggle left sidebar
        if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
            e.preventDefault();
            toggleSidebar('left');
        }
        
        // Ctrl/Cmd + Shift + B: Toggle right sidebar
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'B') {
            e.preventDefault();
            toggleSidebar('right');
        }
        
        // Ctrl/Cmd + Shift + R: Reset sidebar widths
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'R') {
            e.preventDefault();
            resetSidebarWidths();
        }
    });
    
    console.log('⌨️ Sidebar keyboard shortcuts initialized');
    console.log('  Ctrl/Cmd + B: Toggle left sidebar');
    console.log('  Ctrl/Cmd + Shift + B: Toggle right sidebar');
    console.log('  Ctrl/Cmd + Shift + R: Reset sidebar widths');
}

// ========================================
// DOUBLE-CLICK TO RESET
// ========================================

/**
 * Add double-click to reset width functionality
 */
function initDoubleClickReset() {
    document.addEventListener('dblclick', (e) => {
        if (e.target.classList.contains('resize-handle')) {
            const sidebar = e.target.closest('.left-sidebar, .right-sidebar');
            const side = sidebar.classList.contains('left-sidebar') ? 'left' : 'right';
            const defaultWidth = side === 'left' ? DEFAULT_LEFT_WIDTH : DEFAULT_RIGHT_WIDTH;
            
            setSidebarWidth(side, defaultWidth);
        }
    });
    
    console.log('🖱️ Double-click resize handle to reset width');
}

// ========================================
// AUTO-INITIALIZATION
// ========================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initResizableSidebars();
        initSidebarKeyboardShortcuts();
        initDoubleClickReset();
    });
} else {
    // DOM already loaded
    initResizableSidebars();
    initSidebarKeyboardShortcuts();
    initDoubleClickReset();
}

// Export functions for external use
window.ResizableSidebar = {
    init: initResizableSidebars,
    reset: resetSidebarWidths,
    toggle: toggleSidebar,
    getWidth: getSidebarWidth,
    setWidth: setSidebarWidth
};
