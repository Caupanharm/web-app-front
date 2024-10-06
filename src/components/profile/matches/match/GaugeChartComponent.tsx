import React, { FC } from "react";
import GaugeChart from "react-gauge-chart";
import { GaugeChartComponentProps } from "../../../../interfaces/ComponentsInterfaces";
import { useTheme } from "@mui/material";

const GaugeChartComponent: FC<GaugeChartComponentProps> = (props) => {
    const theme = useTheme()

  return (
      <GaugeChart 
      id={props.id}
      style={{width:"50%"}}
      percent={props.values ? scale(props.values.value, props.values.minValue, props.values.maxValue) : 0}
      nrOfLevels={props.nrOfLevels ? props.nrOfLevels : 1}
      arcsLength={props.arcsLength ? props.arcsLength : [0]}
      colors={props.colors ? props.colors : []}
      arcWidth={0.125}
      arcPadding={0.01}
      cornerRadius={3}
      animate={true} 
      needleColor={props.hideNeedle? theme.palette.grey.light: "#000000"}
      needleBaseColor={props.hideNeedle? theme.palette.grey.light: "#000000"}
      hideText={true}
      needleScale={props.hideNeedle? 0 : 0.8}
      
      />
  );
};

function scale(value: number, minValue: number, maxValue: number){
    if(value < minValue){
        return 0
    }else if(value > maxValue){
        return 1
    }else{
        return (value-minValue) / (maxValue-minValue) // normalisation linéaire pour transposer à la plage [0,1] de la jauge
    }
}

export default GaugeChartComponent;
