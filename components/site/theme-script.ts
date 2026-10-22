export const THEME_KEY = "dl-theme";

/**
 * Runs in <head> before first paint: applies the saved theme (dark by default)
 * to <html> so there is no flash of the wrong theme.
 */
export const THEME_SCRIPT = `(function(){var t="dark";try{var s=localStorage.getItem("${THEME_KEY}");if(s==="light"||s==="dark")t=s}catch(e){}var d=document.documentElement;d.setAttribute("data-theme",t==="dark"?"ink":"light")})()`;
