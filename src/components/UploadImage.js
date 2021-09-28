import RNFetchBlob from 'react-native-fetch-blob';

export const uploader = (data) => {
    return RNFetchBlob.fetch('POST', '', {
        'Content-Type': 'multipart/form-data',
    }, data);
};