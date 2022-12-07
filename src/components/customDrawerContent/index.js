import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import { View, Image, Text } from 'react-native';

export default function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{alignItems: 'center', flexDirection: 'row', marginLeft: 15}}>
            <Image style={{width: 50, height: 50}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'}} />
            <Text>Jesuan Patermina</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
}