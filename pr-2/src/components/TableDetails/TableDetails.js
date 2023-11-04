import { View, Text } from 'react-native'
import React from 'react'
import { Col, Row, Rows, Table, TableWrapper } from 'react-native-table-component';
import { styles } from './TableDetails.style';

export default function TableDetails(props) {
    const { params } = props;
    // const tableHead = ['', 'Head1', 'Head2', 'Head3'];
    const tableTitle = [ 'Especie', 'Género', 'Tipo','Estado','Origen'];
    const tableData = [
      
      [params.species],
      [params.gender],
      [params.type],
      [params.status],
      [params.origin],
    ];
  return (
    <View style={styles.container}>
      <Table borderStyle={styles.table}>
          {/* <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} /> */}
          <TableWrapper style={styles.wrapper}>
            <Col data={tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.textTitle} />
            <Rows data={tableData} flexArr={[2]} style={styles.row} textStyle={styles.textData} />
          </TableWrapper>
        </Table>
    </View>
  )
}