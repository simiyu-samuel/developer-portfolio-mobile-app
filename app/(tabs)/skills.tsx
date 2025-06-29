import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Card, Surface, ProgressBar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withRepeat, 
  withTiming,
  withSequence,
  withDelay,
  interpolate
} from 'react-native-reanimated';
import { 
  Monitor, 
  Server, 
  Database, 
  Smartphone,
  Cloud,
  Wrench,
  Code,
  Palette
} from 'lucide-react-native';
import { skills } from '@/constants/data';

const { width } = Dimensions.get('window');

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: '#2563eb',
    skills: skills.frontend,
  },
  {
    title: 'Backend Development', 
    icon: Server,
    color: '#059669',
    skills: skills.backend,
  },
  {
    title: 'Database Management',
    icon: Database,
    color: '#ea580c',
    skills: skills.database,
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: '#7c3aed',
    skills: skills.mobile,
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: '#dc2626',
    skills: skills.devops,
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    color: '#059669',
    skills: skills.tools,
  },
];

export default function SkillsScreen() {
  const theme = useTheme();
  
  const floatingAnimation = useSharedValue(0);
  const scaleAnimation = useSharedValue(1);

  useEffect(() => {
    floatingAnimation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 3500 }),
        withTiming(0, { duration: 3500 })
      ),
      -1,
      true
    );

    scaleAnimation.value = withRepeat(
      withSequence(
        withTiming(1.02, { duration: 2500 }),
        withTiming(1, { duration: 2500 })
      ),
      -1,
      true
    );
  }, []);

  const floatingStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(floatingAnimation.value, [0, 1], [0, -8]) }
    ],
  }));

  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleAnimation.value }],
  }));

  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.secondary]}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.headerContent}>
            <Code size={32} color={theme.colors.onPrimary} />
            <Text style={styles.headerTitle}>Technical Skills</Text>
            <Text style={styles.headerSubtitle}>
              My expertise across different technologies
            </Text>
          </View>
        </LinearGradient>

        {/* Skills Categories */}
        {skillCategories.map((category, categoryIndex) => (
          <Animated.View 
            key={categoryIndex}
            style={[
              styles.categoryContainer,
              categoryIndex % 2 === 0 ? floatingStyle : scaleStyle
            ]}
          >
            <Card style={styles.categoryCard}>
              <LinearGradient
                colors={[category.color, `${category.color}20`]}
                style={styles.categoryHeader}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.categoryTitleContainer}>
                  <View style={styles.categoryIcon}>
                    <category.icon size={24} color="white" />
                  </View>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                </View>
              </LinearGradient>
              
              <Card.Content style={styles.skillsContent}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem 
                    key={skillIndex}
                    skill={skill}
                    index={skillIndex}
                    theme={theme}
                    color={category.color}
                  />
                ))}
              </Card.Content>
            </Card>
          </Animated.View>
        ))}

        {/* Tech Stack Showcase */}
        <Surface style={styles.techStackSection} elevation={2}>
          <LinearGradient
            colors={[theme.colors.primaryContainer, theme.colors.secondaryContainer]}
            style={styles.techStackGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.techStackHeader}>
              <Palette size={28} color={theme.colors.primary} />
              <Text style={styles.techStackTitle}>Preferred Tech Stack</Text>
            </View>
            
            <View style={styles.techStackGrid}>
              {[
                { name: 'React/Next.js', level: 'Expert', color: '#61DAFB' },
                { name: 'Laravel/PHP', level: 'Expert', color: '#FF2D20' },
                { name: 'React Native', level: 'Advanced', color: '#61DAFB' },
                { name: 'TypeScript', level: 'Advanced', color: '#3178C6' },
                { name: 'MySQL/PostgreSQL', level: 'Advanced', color: '#4479A1' },
                { name: 'AWS/Docker', level: 'Intermediate', color: '#FF9900' },
              ].map((tech, index) => (
                <Animated.View 
                  key={index}
                  style={[
                    styles.techStackItem,
                    index % 3 === 0 ? floatingStyle : 
                    index % 3 === 1 ? scaleStyle : {}
                  ]}
                >
                  <View style={[styles.techStackIcon, { backgroundColor: `${tech.color}20` }]}>
                    <View style={[styles.techStackDot, { backgroundColor: tech.color }]} />
                  </View>
                  <Text style={styles.techStackName}>{tech.name}</Text>
                  <Text style={styles.techStackLevel}>{tech.level}</Text>
                </Animated.View>
              ))}
            </View>
          </LinearGradient>
        </Surface>

        {/* Summary */}
        <Card style={styles.summarySection}>
          <Card.Content>
            <Text style={styles.summaryTitle}>Continuous Learning</Text>
            <Text style={styles.summaryText}>
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. I regularly explore new frameworks, attend conferences, and contribute to open-source projects to sharpen my skills.
            </Text>
            <Text style={styles.summaryText}>
              My approach combines proven technologies with innovative solutions, ensuring reliable, scalable, and maintainable code that drives business success.
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const SkillItem = ({ skill, index, theme, color }: any) => {
  const progressAnimation = useSharedValue(0);

  useEffect(() => {
    progressAnimation.value = withDelay(
      index * 150,
      withTiming(skill.level / 100, { duration: 1500 })
    );
  }, []);

  const progressStyle = useAnimatedStyle(() => ({
    width: `${progressAnimation.value * 100}%`,
  }));

  return (
    <View style={createSkillStyles(theme).skillItem}>
      <View style={createSkillStyles(theme).skillHeader}>
        <Text style={createSkillStyles(theme).skillName}>{skill.name}</Text>
        <Text style={createSkillStyles(theme).skillLevel}>{skill.level}%</Text>
      </View>
      <View style={createSkillStyles(theme).progressContainer}>
        <View style={createSkillStyles(theme).progressBackground} />
        <Animated.View 
          style={[
            createSkillStyles(theme).progressBar,
            { backgroundColor: color },
            progressStyle
          ]} 
        />
      </View>
    </View>
  );
};

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.onPrimary,
    fontFamily: 'Poppins-Bold',
    marginTop: 12,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: theme.colors.onPrimary,
    fontFamily: 'Inter-Regular',
    opacity: 0.9,
    textAlign: 'center',
  },
  categoryContainer: {
    margin: 24,
    marginBottom: 16,
  },
  categoryCard: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  categoryHeader: {
    padding: 20,
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  skillsContent: {
    padding: 20,
  },
  techStackSection: {
    margin: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  techStackGradient: {
    padding: 24,
  },
  techStackHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  techStackTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Poppins-SemiBold',
  },
  techStackGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  techStackItem: {
    width: (width - 96) / 2,
    alignItems: 'center',
    marginBottom: 16,
  },
  techStackIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  techStackDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  techStackName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
    marginBottom: 2,
  },
  techStackLevel: {
    fontSize: 12,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Regular',
  },
  summarySection: {
    margin: 24,
    borderRadius: 16,
  },
  summaryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 16,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Regular',
    lineHeight: 24,
    marginBottom: 16,
  },
});

const createSkillStyles = (theme: any) => StyleSheet.create({
  skillItem: {
    marginBottom: 20,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  skillName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Inter-SemiBold',
  },
  skillLevel: {
    fontSize: 14,
    color: theme.colors.primary,
    fontFamily: 'Inter-SemiBold',
  },
  progressContainer: {
    height: 8,
    backgroundColor: theme.colors.surfaceContainer,
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  },
  progressBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.surfaceContainer,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
});