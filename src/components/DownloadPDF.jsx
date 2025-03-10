import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  text: { fontSize: 12 },
});

const MyDocument = ({ personalInfo, summary, experience }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{personalInfo.name}</Text>
        <Text style={styles.text}>{personalInfo.email} | {personalInfo.phone}</Text>
        <Text style={styles.text}>{summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Werkervaring</Text>
        {experience.map(job => (
          <Text key={job.id} style={styles.text}>
            {job.position} @ {job.company} ({job.period})
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
