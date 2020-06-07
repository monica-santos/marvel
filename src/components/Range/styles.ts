import styled from "styled-components/native"

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Indicator = styled.Text`
  background-color: #fff;
  color: #fff;
  width: 1px;
  height: 8px;
  margin: 0;
  margin-right: 4px;
`

export const RemainingIndicator = styled(Indicator)`
  background-color: #ffffff;
  opacity: 0.25;
`
export const ActiveIndicator = styled(Indicator)`
  height: 12px;
`
