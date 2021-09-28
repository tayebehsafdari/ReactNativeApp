import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const options = {
    title: 'انتخاب تصویر',
    takePhotoButtonTitle: 'گرقتن از دوربین',
    chooseFromLibraryButtonTitle: 'انتخاب از گالری تصاویر',
    cancelButtonTitle: 'منصرف شدم',
    customButtons: [
        {name: 'ga', title: 'گرفتن تصویر از گالری سایت خودم'}
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
export const picker = (callback) => {
    launchCamera(options, (response) => {
        console.log('Response= ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            let source = {uri: response.uri};
            callback(source, response.data);
        }
    });
}