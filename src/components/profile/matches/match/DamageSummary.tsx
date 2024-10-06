import React, { FC } from "react";
import GaugeChart from "react-gauge-chart";
import Box from "@mui/material/Box";
import { DamageSummaryProps } from "../../../../interfaces/ComponentsInterfaces";

const DamageSummary: FC<DamageSummaryProps> = ({ data }) => {
  const damageDelta = Math.round(((data.stats.damageDealt - data.stats.damageReceived) / (data.stats.allyScore + data.stats.enemyScore)) * 10) / 10;
  const gaugePercent = scaleDelta(damageDelta)

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%" height="100%" justifyContent="center">
      Diff dégâts : {damageDelta}
      <GaugeChart id="gauge-chart-damage" style={{width:"50%"}}
      percent={gaugePercent}
      nrOfLevels={2}
      colors={["#FF0000","#00FF00"]}
      arcWidth={0.125}
      arcPadding={0.01}
      cornerRadius={3} 
      animate={false} 
      needleColor={"#000000"}
      hideText={true}
      needleScale={0.8}
      />
    </Box>
  );
};

function scaleDelta(delta: number){
    if(delta < -150){
        return 0
    }else if(delta > 150){
        return 1
    }else{
        return (delta + 150) / 300
    }
}

export default DamageSummary;
