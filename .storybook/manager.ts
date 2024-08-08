/**
 * @fileoverview
 * The `ManagerConfig` object is used to configure the layout of the Storybook Manager UI.
 *
 * @file .storybook/manager.ts
 * @type {import('@storybook/manager-api').ManagerConfig}
 * @see https://storybook.js.org/docs/addons/addons-api#addonssetconfigconfig
 *
 */
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';



addons.setConfig({
  navSize: 0,
  bottomPanelHeight: 300,
  rightPanelWidth: 300,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: false,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
