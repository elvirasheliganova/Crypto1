import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';
import {Ionicons} from '@expo/vector-icons';
import {
  useFonts,
  
  MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
 
} from '@expo-google-fonts/montserrat-alternates';
import Currency from '../components/Currency';
import Cashback from '../components/Cashback';
import Header from '../headers/Header';
import TextButton from '../components/TextButton';



export default function ExchangesScreen() {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
  });
  const scrollX = new Animated.Value(0);

  const numberOfCharts = [1, 2, 3];

  const [chartOptions, setChartOptions] = React.useState(
    [
      {
          id: 1,
          label: "1 Day"
      },
      {
          id: 2,
          label: "1 Week"
      },
      {
          id: 3,
          label: "1 Month"
      },
      {
          id: 4,
          label: "1 Year"
      },
      {
          id: 5,
          label: "MAX"
      }
  ]
  
  )

  const [selectedOption, setSelectedOption] = React.useState(chartOptions[0])
  
  function optionOnClickHandler(option) {
    setSelectedOption(option)
  }

  function renderChart(){
    return(
      <View style={styles.chartContainer}>

        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            paddingHorizontal: 10,
          }}>

          <View style={styles.currencyContainer}>  
            <Text style={styles.currencyName}>1 BTC - 21st of October</Text>
            <Text style={styles.currencyValue}>$45,568</Text>
          </View>
        </View>

        <ScrollView 
        horizontal
        
      >
         <Chart
                style={{ height: 420, width: 400 }}
                data={[
                  { x: 13.00, y: 40 },
                  { x: 13.50, y: 45 },
                  { x: 14.00, y: 44 },
                  { x: 14.50, y: 45 },
                  { x: 15.00, y: 38 },
                  
                  { x: 16.00, y: 46 },
                  { x: 16.50, y: 36 },
                  { x: 17.00, y: 46 },
                  
                ]}
                padding={{ left: 40, bottom: 30, right: 20, top: 20 }}
                xDomain={{ min: 13.00, max: 17.00 }}
                yDomain={{ min: 34, max: 46 }}
              >
                <VerticalAxis tickCount={13} theme={{ 
                  grid: {
                    visible: false,
                  },
                  axis: {
                    visible: false,
                  },
                  ticks: {
                    visible: false,
                  },
                  labels: { 
                   label: {
                    color: '#6B6C75',
                    fontSize: 12,
                    fontWeight: 300,
                    textAnchor: 'end',
                    opacity: 1,
                    dx: -10,
                    dy: 0,
                    rotation: 0,
                    
                  },
                  formatter: (v) => v.toFixed() } }} />
                <HorizontalAxis tickCount={5} theme={{ 
                   grid: {
                    visible: false,
                  },
                  axis: {
                    visible: false,
                  },
                  ticks: {
                    visible: false,
                  },
                  labels: {    
                  label: {
                    color: '#6B6C75',
                    fontSize: 12,
                    fontWeight: 300,
                    textAnchor: 'end',
                    opacity: 1,
                    dx: 10,
                    dy: -25,
                    rotation: 0,
                    
                  },
                  formatter: (v) => v.toFixed(2) } }} />
                <Area theme={{ gradient: { from: { color: '#5AE2C3' }, to: { color: 'black', opacity: 0.4 } }}} />
                <Line theme={{ stroke: { color: '#5AE2C3', width: 2 }, scatter: { default: { width: 0, height: 0, rx: 2 }} }} />
              </Chart>
             
       
      </ScrollView>
        {/* Chart */}
        {/* <Animated.ScrollView
          horizontal={true}
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment='center'
          snapToInterval={500}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollX}}}
            ], {useNativeDriver: false}
          )}>*/}

<View style={{
  flex: 1,
  flexDirection: 'row',
 
}}>
            {
              numberOfCharts.map((item, index) =>(
                
                <View
                key={`chart-${index}`}
                style={{
                  
                  
                  
                  
                  marginLeft: index == 0? 25 : 0
                }}
                >
                  
               
              </View>
              
              
              ) )
            }
     </View>
     


        {/* Options */}
        <View style={{width: '100%', paddingHorizontal: 25, flexDirection: 'row',
      justifyContent: 'space-between'}}>
          {
            chartOptions.map((option) => {
              return (
                <TextButton
                  key={`option-${option.id}`}
                  label={option.label}
                  customContainerStyle={{
                    height: 30,
                    width: 60,
                    marginTop: 30,
                    borderRadius: 15,
                    backgroundColor: selectedOption.id == option.id ? '#0067FF' : 'black'
                  }}
                  onPress={() => optionOnClickHandler(option)}
                />
              )
            })
          }
        </View>

        {/* Dots */}
        
      </View>
    )
  }
  
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
         <Header title='Exchange'/>
      </View>
      <View >
        <ScrollView>
          <View style={styles.container}>
            {renderChart()}
          </View>
          
        </ScrollView>
      
     
      
      
       
      <StatusBar style="light"  />
      
    </View>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },

  chartContainer: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
   
  
 headerContainer: {
   height: 60,
 },

 currencyContainer: {
   
   width: '100%',
   paddingLeft: 25,
   marginVertical: 25,
   alignContent: 'flex-start'
 },
 currencyName: {
   
   fontSize: 14,
   color: '#6B6C75'
 },
 currencyValue: {
   
  fontSize: 44,
  color: '#fff'
},
  

  

  

  


  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50
  }

  
});
