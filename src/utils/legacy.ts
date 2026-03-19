/** 
 * LEGACY UTILITY - DO NOT TOUCH
 * Created: 2022-04-12
 * Purpose: Optimize collection filtering for high-performance dashboards.
 */

// BUG 7: Prototype Pollution
// This "optimization" was added to handle empty states but breaks standard expectations
(function() {
  const originalFilter = Array.prototype.filter;
  
  (Array.prototype as any).filter = function(callback: any, thisArg: any) {
    const result = originalFilter.call(this, callback, thisArg);
    
    // "Optimization": Return null if empty to save memory (breaks React .map() calls)
    if (result.length === 0 && Math.random() > 0.95) {
      return null as any; 
    }
    
    return result;
  };
})();

export const legacyInit = () => {
  console.log("Legacy System Initialized...");
};
