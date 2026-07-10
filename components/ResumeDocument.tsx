import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Courier',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/courierprime/v9/u-450q2lgwcsMx9rPpAtFMfS6EA.ttf' },
    { src: 'https://fonts.gstatic.com/s/courierprime/v9/u-420q2lgwcsMx9rPpAtFMfS6Eg7DbA.ttf', fontWeight: 'bold' }
  ]
});

const styles = StyleSheet.create({
  page: { padding: 36, backgroundColor: '#fcfaf6', color: '#161616', fontFamily: 'Helvetica' },
  header: { marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#e5e5e5', paddingBottom: 14 },
  name: { fontSize: 28, fontWeight: 'light', letterSpacing: -0.5 },
  title: { fontSize: 11, fontFamily: 'Courier', color: '#737373', marginTop: 4, letterSpacing: 1 },
  metaContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, fontSize: 9, color: '#737373' },
  section: { marginBottom: 16 },
  sectionTitle: { fontSize: 10, fontFamily: 'Courier', color: '#a3a3a3', letterSpacing: 2, marginBottom: 8, borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5', paddingBottom: 4 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 4 },
  gridItem: { width: '50%', marginBottom: 6 },
  techLabel: { fontSize: 10, fontWeight: 'bold' },
  techValue: { fontSize: 10, color: '#525252', marginTop: 2 },
  jobContainer: { marginBottom: 12 },
  jobHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  jobTitle: { fontSize: 12, fontWeight: 'bold' },
  jobCompany: { fontSize: 10, color: '#737373', fontFamily: 'Courier' },
  jobDate: { fontSize: 9, color: '#a3a3a3' },
  bullet: { fontSize: 9.5, color: '#404040', marginLeft: 8, marginTop: 4, lineHeight: 1.4 },
  projectTitle: { fontSize: 11, fontWeight: 'bold' },
  projectStack: { fontSize: 9, fontFamily: 'Courier', color: '#737373', marginTop: 2 }
});

export const ResumeDocument = () => (
  <Document title="Huseyn Khalil - Resume" author="Huseyn Khalil">
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Huseyn Khalil</Text>
        <Text style={styles.title}>FRONT-END SPECIALIST</Text>
        <View style={styles.metaContainer}>
          <Text>Baku, Azerbaijan</Text>
          <Text>mazegitt@gmail.com</Text>
          <Text>github.com/mazegit1</Text>
          <Text>linkedin.com/in/huseyn-khalil-7022262bb</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>// TECHNICAL CAPABILITY MATRIX</Text>
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.techLabel}>Core Layers</Text>
            <Text style={styles.techValue}>TypeScript, JavaScript (ES6+), Java, SQL</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.techLabel}>UI Frameworks</Text>
            <Text style={styles.techValue}>React.js, Next.js (App Router), Tailwind CSS</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.techLabel}>State & Processing</Text>
            <Text style={styles.techValue}>Zustand, Redux Toolkit, React Query, Node.js</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.techLabel}>Tooling & Deploy</Text>
            <Text style={styles.techValue}>Git, Vite, pnpm, Component Libraries (Shadcn/Radix)</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>// METHODOLOGIES & ARCHITECTURE</Text>
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.techLabel}>Development Philosophy</Text>
            <Text style={styles.techValue}>Component-Driven Development, Semantic HTML, Clean Code</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.techLabel}>Performance Optimization</Text>
            <Text style={styles.techValue}>Code Splitting, Image Optimization, Bundle Minimization</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>// PRODUCTION EXPERIENCE LOGS</Text>
        <View style={styles.jobContainer}>
          <View style={styles.jobHeader}>
            <Text style={styles.jobTitle}>Front-end Specialist / Developer</Text>
            <Text style={styles.jobCompany}>Safavy & High Result Academy</Text>
            <Text style={styles.jobDate}>2025 - Present</Text>
          </View>
          <Text style={styles.bullet}>• Architected high-performance web applications using Next.js and TypeScript, minimizing load benchmarks and maximizing layout stability metrics.</Text>
          <Text style={styles.bullet}>• Designed modular component layouts with strict typing integrations and smooth Framer Motion processing frames.</Text>
          <Text style={styles.bullet}>• Built functional client-side architectures interacting cleanly with remote API routers and payload models.</Text>
          <Text style={styles.bullet}>• Refactored legacy UI sections to modern Tailwind CSS configurations, drastically reducing CSS bundle footprint sizes.</Text>
          <Text style={styles.bullet}>• Collaborated closely with backend systems engineers to synchronize interface data models with JSON schemas.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>// DEPLOYED SYSTEM NODES</Text>
        <View style={styles.jobContainer}>
          <Text style={styles.projectTitle}>Course Management Platform</Text>
          <Text style={styles.projectStack}>Next.js // Node.js // Tailwind CSS</Text>
          <Text style={styles.bullet}>• Engineered an automated institutional space managing real-time student indexing, secure tuition transaction tracing pipelines, and attendance analytics.</Text>
          <Text style={styles.bullet}>• Built fully responsive administration dashboards utilizing highly scannable grid layouts and interactive tabular charts.</Text>
        </View>
        <View style={styles.jobContainer}>
          <Text style={styles.projectTitle}>Internship Management Pipeline</Text>
          <Text style={styles.projectStack}>Java // Next.js // TypeScript</Text>
          <Text style={styles.bullet}>• Developed a decoupled architecture binding a structured Java server endpoint array to a lightweight, responsive developer panel interface.</Text>
          <Text style={styles.bullet}>• Integrated secure client-side state handling using lightweight context strategies to prevent duplicate API dispatch chains.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>// KNOWLEDGE ACQUISITION & CONTINUOUS LOGS</Text>
        <View style={styles.jobContainer}>
          <View style={styles.jobHeader}>
            <Text style={styles.jobTitle}>Self-Directed Technical Engineering</Text>
            <Text style={styles.jobCompany}>Independent Studies</Text>
            <Text style={styles.jobDate}>Ongoing</Text>
          </View>
          <Text style={styles.bullet}>• Deeply focused on advanced computer science fields including systems logic, discrete mathematics, and algorithmic complexity mapping.</Text>
          <Text style={styles.bullet}>• Investigates low-level computing architectures and component electronics data streaming principles.</Text>
        </View>
      </View>
    </Page>
  </Document>
);