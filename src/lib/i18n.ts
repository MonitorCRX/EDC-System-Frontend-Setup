import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to EDC System',
      login: 'Login',
      email: 'Email',
      password: 'Password',
      submit: 'Submit',
      confirmEmail: 'Confirm Email',
      emailMismatch: 'Emails do not match',
      dashboard: 'Dashboard',
      studies: 'Studies',
      patients: 'Patients',
      reports: 'Reports',
      settings: 'Settings',
      activeStudies: 'Active Studies',
      totalPatients: 'Total Patients',
      pendingReviews: 'Pending Reviews',
      studyName: 'Study Name',
      status: 'Status',
      startDate: 'Start Date',
      actions: 'Actions',
      view: 'View',
      edit: 'Edit',
      delete: 'Delete',
      addStudy: 'Add New Study',
      addPatient: 'Add New Patient',
      patientId: 'Patient ID',
      studyId: 'Study ID',
      enrollmentDate: 'Enrollment Date',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      other: 'Other',
      weight: 'Weight',
      height: 'Height',
      medicalHistory: 'Medical History',
      progress: 'Progress'
    },
  },
  zh: {
    translation: {
      welcome: '欢迎使用EDC系统',
      login: '登录',
      email: '邮箱',
      password: '密码',
      submit: '提交',
      confirmEmail: '确认邮箱',
      emailMismatch: '邮箱不匹配',
      dashboard: '仪表板',
      studies: '研究项目',
      patients: '患者管理',
      reports: '报告中心',
      settings: '系统设置',
      activeStudies: '进行中的研究',
      totalPatients: '患者总数',
      pendingReviews: '待审核',
      studyName: '研究名称',
      status: '状态',
      startDate: '开始日期',
      actions: '操作',
      view: '查看',
      edit: '编辑',
      delete: '删除',
      addStudy: '添加新研究',
      addPatient: '添加新患者',
      patientId: '患者ID',
      studyId: '研究ID',
      enrollmentDate: '入组日期',
      dateOfBirth: '出生日期',
      gender: '性别',
      male: '男',
      female: '女',
      other: '其他',
      weight: '体重',
      height: '身高',
      medicalHistory: '病史',
      progress: '进度'
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;