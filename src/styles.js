const styles = {
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  topBarHeight: 40,
  footerMenuHeight: 50,
  showFooterMenuText: ({windowWidth}) => windowWidth > 500,
  showSidebar: ({windowWidth}) => windowWidth > 768,
  sidebarCollapsed: ({windowWidth}) => windowWidth < 1100,
  sidebarWidth: ({windowWidth}) => windowWidth < 1100 ? 50 : 150
};
export default styles;
