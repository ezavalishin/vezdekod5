import {Page, Router} from '@happysanta/router';

// pages
export const PAGE_MAIN = '/';
export const PAGE_TYPE = '/type';
export const PAGE_SETTINGS = '/settings';
export const PAGE_ADDITIONAL = '/additional';
export const PAGE_DETAIL = '/item';

// views
export const VIEW_MAIN = 'view_main';
export const VIEW_DETAIL = 'view_detail';

// panels
export const PANEL_MAIN = 'panel_main';
export const PANEL_TYPE = 'panel_type';
export const PANEL_SETTINGS = 'panel_settings';
export const PANEL_ADDITIONAL = 'panel_additional';

export const PANEL_DETAIL = 'panel_detail';

const routes = {
  [PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
  [PAGE_TYPE]: new Page(PANEL_TYPE, VIEW_MAIN),
  [PAGE_SETTINGS]: new Page(PANEL_SETTINGS, VIEW_MAIN),
  [PAGE_ADDITIONAL]: new Page(PANEL_ADDITIONAL, VIEW_MAIN),

  [PAGE_DETAIL]: new Page(PANEL_DETAIL, VIEW_DETAIL),
};

export const router = new Router(routes);

router.start();
