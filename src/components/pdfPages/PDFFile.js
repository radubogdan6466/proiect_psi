import jsonData from "../angajati.json";
import React from "react";
import styles from "./pdf";

import {
  Page,
  Text,
  Document,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
const PDFFile = ({ employee }) => {
  return (
    <Document>
      <Page size={"A4"} style={styles.body}>
        <Text>Sc eurocontab consult srl</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>
                Nume:
                <Text style={{ height: 10 }}>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                {employee.nume}
              </Text>
              <Text style={styles.tableCell}>
                Prenume:
                <Text style={{ height: 10 }}>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                {employee.nume}
              </Text>
            </View>

            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Functia:
                <Text style={{ height: 10 }}>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                {employee.functia}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol2}>
              <Text style={styles.tableCell}>
                Sal de incadrare:
                <Text style={{ height: 10 }}>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                {employee.salariuIncadrare}
              </Text>
              <Text style={styles.tableCell}>
                Salariu orar:
                <Text style={{ height: 10 }}>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                {employee.salariuIncadrare / 160}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol5}>
              <Text style={styles.tableCell}>Ore lucrate in regim normal:</Text>
              <Text style={styles.tableCell}>Ore CO:</Text>
              <Text style={styles.tableCell}>Ore BO:</Text>
              <Text style={styles.tableCell}>Ore suplim:</Text>
              <Text style={styles.tableCell}>Pers. intretinute:</Text>
              <Text style={styles.tableCell}>Venit impozabil:</Text>
            </View>

            <View style={styles.tableCol6}>
              <Text style={styles.tableCell}>{employee.oreRegimNormal}</Text>
              <Text style={styles.tableCell}>{employee.oreCo}</Text>
              <Text style={styles.tableCell}>{employee.oreBO}</Text>
              <Text style={styles.tableCell}>{employee.oreSuplimentare}</Text>
              <Text style={styles.tableCell}>{employee.persIntretinute}</Text>
              <Text style={styles.tableCell}>{employee.vImpozabil}</Text>
            </View>

            <View style={styles.tableCol5}>
              <Text style={styles.tableCell}>
                Suma ore lucrate in regim normal:
              </Text>
              <Text style={styles.tableCell}>Sume CO:</Text>
              <Text style={styles.tableCell}>Sume BO:</Text>
              <Text style={styles.tableCell}>Sume ore Suplim</Text>
              <Text style={styles.tableCell}>Adaos retinere brut</Text>
              <Text style={styles.tableCell}>Total realizat</Text>
              <Text style={styles.tableCell}>Fond somaj 1%</Text>
              <Text style={styles.tableCell}>Font sanatate 6.5%</Text>
              <Text style={styles.tableCell}>CAS 9.5%</Text>
              <Text style={styles.tableCell}>Deducere</Text>
              <Text style={styles.tableCell}>Impozit de plata</Text>
              <Text style={styles.tableCell}>Salariu net</Text>
              <Text style={styles.tableCell}>Avans Salariu</Text>
              <Text style={styles.tableCell}>Rest de plata</Text>
            </View>

            <View style={styles.tableCol6}>
              <Text style={styles.tableCell}>{employee.salariuIncadrare}</Text>
              <Text style={styles.tableCell}>{employee.oreCo}</Text>
              <Text style={styles.tableCell}>{employee.oreBO}</Text>
              <Text style={styles.tableCell}>
                {employee.oreSuplimentare *
                  (employee.salariuIncadrare / employee.oreRegimNormal)}
              </Text>
              <Text style={styles.tableCell}>0</Text>
              <Text style={styles.tableCell}>{employee.salariuIncadrare}</Text>
              <Text style={styles.tableCell}>
                {employee.salariuIncadrare * 0.01}
              </Text>
              <Text style={styles.tableCell}>
                {employee.salariuIncadrare * 0.065}
              </Text>
              <Text style={styles.tableCell}>
                {employee.salariuIncadrare * 0.095}
              </Text>
              <Text style={styles.tableCell}>0 </Text>
              <Text style={styles.tableCell}>0 </Text>
              <Text style={styles.tableCell}>
                {employee.salariuIncadrare * 0.01}
              </Text>
              <Text style={styles.tableCell}>100 </Text>
              <Text style={styles.tableCell}>n-am calculat</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
