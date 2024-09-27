import { Text, } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StyledView } from '@/constants/nativeComps';
import * as SecureStore from 'expo-secure-store'
import Login from '@/components/Auth/Login';
import Signup from '@/components/Auth/Signup';
import Splash from '@/components/Reuseable/splash';
import axios from 'axios';
import { useAuth, AuthType } from '@/store/useAuth';
const App = () => {

    const router = useRouter();
    const [authComp, setAuthComp] = React.useState(true);

    const login = useAuth((state: AuthType) => state.login);
    const setData = useAuth((state: AuthType) => state.setData);
    const isAuthenticated = useAuth((state: AuthType) => state.isAuthenticated);

    const [loading, setLoading] = React.useState(true);
    const toggleComp = () => {
        setAuthComp(!authComp);
    }

    useEffect(() => {

        (async function verifyAuth() {
            const token = await SecureStore.getItemAsync('token');
            try {


                if (token) {
                    const res = await axios.get('http://localhost:8081/api/verify', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (res.status == 200) {
                        const data = res.data;
                        login();
                        setData(data);
                        if (data.role == 'patient') {
                            router.push('/patient');
                        }
                        else {
                            router.push('/docter');
                        }
                    }
                }
                else {
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        })();
    }, [])

    if (loading) {
        return <Splash />
    }


    return (
        <StyledView className='flex-1'>
            {authComp
                ? <Login patient={true} docter={false} toggleComp={toggleComp} />
                : <Signup toggleComp={toggleComp} />
            }
        </StyledView>
    );
};

export default App;
