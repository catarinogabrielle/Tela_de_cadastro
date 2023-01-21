import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
background-color: #fff;
align-items: center;
`;

export const Title = styled.Text`
font-size: 18px;
font-weight: bold;
margin: 17px 0 18px 0;
color: #666666;
`;

export const Content = styled.View`
flex: 1;
background-color: #f2f0f0;
width: 100%;
align-items: center;
`;

export const BoxHeader = styled.View`
width: 90%;
flex-direction: row;
padding: 20px 0;
`;

export const Photo = styled.View`
width: 65px;
height: 65px;
border-radius: 80px;
background-color: #13ba04;
align-items: center;
justify-content: center;
`;

export const BoxInfoHeader = styled.View`
margin-left: 20px
`;

export const Email = styled.Text`
font-size: 15px;
font-weight: lighter;
color: #666666;
`;

export const ButtonEdit = styled.TouchableOpacity`
margin-top: 13px;
flex-direction: row;
align-items: center;
`;

export const EditPhoto = styled.Text`
font-size: 16px;
font-weight: bold;
color: #fa8202;
margin-left: 7px;
`;

export const BoxSelect = styled.View`
background-color: #fff;
width: 90%;
padding: 0 14px 14px 14px;
border-radius: 22px;
margin-bottom: 16px;
`;

export const TitleInfo = styled.Text`
font-size: 17px;
font-weight: bold;
color: #666666;
margin-top: 14px;
`;

export const BoxTypePerson = styled.View`
flex-direction: row;
justify-content: space-between;
width: 100%;
margin: 20px 0 25px 0;
`;

export const ContentTypeActive = styled.TouchableOpacity`
border-bottom-width: 1px;
border-bottom-color: #fa8202;
width: 153px;
padding-bottom: 14px;
align-items: center;
`;

export const TextActive = styled.Text`
font-size: 16px;
color: #fa8202;
`;

export const ContentType = styled.TouchableOpacity`
border-bottom-width: 1px;
border-bottom-color: #cecece;
width: 153px;
padding-bottom: 14px;
align-items: center;
`;

export const Text = styled.Text`
font-size: 16px;
color: #666666;
`;

export const ContentInput = styled.View`
width: 100%;
align-items: center;
margin: 12px 0 14px 0;
`;

export const Input = styled.TextInput`
height: 40px;
width: 100%;
border-bottom-width: 1px;
border-bottom-color: #cecece;
padding: 0 0 5px 0;
`;

export const BoxTypePurchase = styled.View`
width: 100%;
align-items: center;
justify-content: center;
flex-direction: row;
margin: 18px 0 12px 0;
`;

export const TypePurchaseOne = styled.TouchableOpacity`
height: 40px;
border-width: 1px;
border-color: #cecece;
padding: 0 0 5px 0;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
justify-content: center;
padding: 0 10px;
`;

export const TypePurchaseTwo = styled.TouchableOpacity`
height: 40px;
border-width: 1px;
border-color: #cecece;
padding: 0 0 5px 0;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
justify-content: center;
padding: 0 10px;
`;

export const TypePurchaseOneActive = styled.TouchableOpacity`
height: 40px;
border-width: 1px;
border-color: #fa8202;
padding: 0 0 5px 0;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
justify-content: center;
padding: 0 10px;
`;

export const TypePurchaseTwoActive = styled.TouchableOpacity`
height: 40px;
border-width: 1px;
border-color: #fa8202;
padding: 0 0 5px 0;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
justify-content: center;
padding: 0 10px;
`;

export const DescriptionTel = styled.Text`
font-size: 14px;
font-weight: lighter;
color: #a8a8a8;
margin-top: 5px;
width: 90%
`;