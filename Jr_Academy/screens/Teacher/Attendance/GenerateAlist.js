export default function Layout() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
  
            //prevent other unwanted tab from showing
            if (route.name === 'DismissalTime') {
              iconName = 'book';
            } else if (route.name === 'index') {
              iconName = 'home';
            } else if (route.name === 'setting') {
              iconName = 'gear';
            }
  
            return <FontAwesome name={iconName} size={24} color={color} />;
          },
          tabBarShowLabel: true,
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        
        <Tab.Screen name="DismissalTime" component={DismissalTimeScreen} />
        <Tab.Screen name="index" component={HomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen name="setting" component={SettingStack} />
      </Tab.Navigator>
    );
  }