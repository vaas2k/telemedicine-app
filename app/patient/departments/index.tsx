import React from 'react';
import { StyledView, StyledText } from '@/constants/nativeComps';
import { Search } from 'lucide-react-native';
import { Button, Icon, Input, Pressable } from 'native-base';
import { ScrollView, Image } from 'react-native';
import { router } from 'expo-router';

const Index = () => {

    const departments = [
        {
            id : 1,
            title: 'General Practitioner',
            description: 'Provides primary healthcare services',
            logo: 'https://img.freepik.com/free-photo/portrait-3d-male-doctor_23-2151107421.jpg?t=st=1726739162~exp=1726742762~hmac=3320c70963e17f8af2f42e559f48a8de427ee9b90fdbe7b71d8e12c03ee9d13c&w=1060'
        },
        {
            id : 2,
            title: 'Pediatrics',
            description: 'Specializes in healthcare for infants, children, and adolescents.',
            logo: 'https://img.freepik.com/premium-photo/picture-doctor-with-doctor-doctor_981829-13264.jpg?w=740'
        },
        {
            id : 3,
            title: 'Cardiology',
            description: 'Focuses on diagnosing and treating heart conditions',
            logo: 'https://img.freepik.com/premium-photo/blood-circulation-heart_996086-29940.jpg?w=740'
        },
        {
            id : 4,
            title: 'Dermatology',
            description: 'Offering medical and cosmetic dermatological care.',
            logo: 'https://img.freepik.com/premium-vector/female-doctor-wearing-white-coat-blue-gloves-is-preparing-give-vaccine-injection-man-wearing-face-mask_150234-81382.jpg?w=740'
        },
        {
            id : 5,
            title: 'Orthopedics',
            description: 'Specializes in musculoskeletal issues',
            logo: 'https://img.freepik.com/premium-photo/picture-doctor-with-doctor-doctor_981829-13315.jpg?w=740'
        },
        {
            id : 6,
            title: 'Radiology',
            description: 'Provides imaging services such as X-rays etc.',
            logo: 'https://img.freepik.com/premium-vector/cerebral-palsy-mrt-device-vector-illustration-flat-2_764382-127372.jpg?w=740'
        }
    ];

    return (
        <StyledView className='flex-1 bg-transparent'>
            <StyledView className='items-center mt-[20px]'>
                <Input
                    rounded={'xl'}
                    height={50}
                    w={{
                        base: "85%",
                        md: "25%"
                    }}
                    InputLeftElement={<Icon as={<Search />} size={5} ml="2" color="muted.400" />}
                    placeholder="Search for doctors"
                />
            </StyledView>

            <ScrollView>
                <StyledView className='items-center mb-[70px]'>
                    {departments.map((item, index) => (
                        <Pressable
                            onPress={() => router.push(`/patient/docters/${item.title}`)}
                            key={index}
                            className='flex-row  my-4 w-[335px] bg-white rounded-2xl p-4'
                            style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 3 },
                                shadowOpacity: 0.3,
                                shadowRadius: 5,
                                elevation: 5, // for Android
                            }}
                        >
                            <Image
                                source={{ uri: item.logo }}
                                alt="Doctor logo"
                                className='rounded-xl w-[80px] h-[80px] mr-4'
                            />

                            <StyledView className='flex-1'>
                                <StyledText className='text-lg font-bold text-rose-600'>
                                    {item.title}
                                </StyledText>
                                <StyledText className='text-[13px] font-normal text-gray-600 mt-2'>
                                    {item.description}
                                </StyledText>
                            </StyledView>
                        </Pressable>
                    ))}
                </StyledView>
            </ScrollView>
        </StyledView>
    );
};

export default Index;
