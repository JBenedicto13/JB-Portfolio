// GTM initialization utility
export const initializeGTM = async () => {
  try {
    const TagManager = await import('react-gtm-module');
    const tagManagerArgs = {
      gtmId: 'GTM-M22SGQ5B' // Replace with your actual GTM ID
    };
    TagManager.default.initialize(tagManagerArgs);
    console.log('GTM initialized successfully');
  } catch (error) {
    console.warn('Failed to initialize GTM:', error);
  }
};
