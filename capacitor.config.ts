import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cl.duoc.PGY4121',
  appName: 'AppFinal',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
  plugins: {
    BarcodeScanner: {
      android: {
        permission: 'android.permission.CAMERA',
        requestPermissionOnStart: true,
      },
    },
  },
};

export default config;
