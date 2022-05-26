/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          LibraryTab: {
            screens: {
              LibraryScreen: 'library',
            },
          },
          BrowseTab: {
            screens: {
              BrowseScreen: 'browse',
            },
          },
          SearchTab: {
            screens: {
              SearchScreen: 'search',
            },
          },
          SettingsTab: {
            screens: {
              SearchScreen: 'settings',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
