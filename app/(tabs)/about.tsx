import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Card, Surface, Chip } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withRepeat, 
  withTiming,
  withSequence,
  interpolate
} from 'react-native-reanimated';
import { 
  Code, 
  Palette, 
  Globe, 
  Target,
  Heart,
  Lightbulb,
  Users,
  Trophy
} from 'lucide-react-native';
import { personalData, stats } from '@/constants/data';

const { width } = Dimensions.get('window');

const highlights = [
  {
    id: 1,
    title: "Full-Stack Expertise",
    description: "Mastery in both frontend and backend technologies with 5+ years of hands-on experience",
    icon: Code,
    color: "#2563eb"
  },
  {
    id: 2,
    title: "Digital Creator",
    description: "Bringing creative vision to life through elegant code and intuitive user experiences",
    icon: Palette,
    color: "#059669"
  },
  {
    id: 3,
    title: "Global Collaboration",
    description: "Successfully delivered projects for clients across 12+ countries worldwide",
    icon: Globe,
    color: "#ea580c"
  },
  {
    id: 4,
    title: "Proven Results",
    description: "48+ completed projects with consistently high client satisfaction ratings",
    icon: Target,
    color: "#7c3aed"
  }
];

const interests = [
  "Tech Innovation", "Digital Marketing", "Product Design", 
  "Entrepreneurship", "Community Building", "Open Source",
  "Mobile UX", "Web Performance", "AI/ML", "DevOps"
];

export default function AboutScreen() {
  const theme = useTheme();
  
  const floatingAnimation = useSharedValue(0);
  const scaleAnimation = useSharedValue(1);

  React.useEffect(() => {
    floatingAnimation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 3000 }),
        withTiming(0, { duration: 3000 })
      ),
      -1,
      true
    );

    scaleAnimation.value = withRepeat(
      withSequence(
        withTiming(1.02, { duration: 2000 }),
        withTiming(1, { duration: 2000 })
      ),
      -1,
      true
    );
  }, []);

  const floatingStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(floatingAnimation.value, [0, 1], [0, -10]) }
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
          <Animated.View style={[styles.headerContent, scaleStyle]}>
            <Image
              source={{ uri: personalData.profileImage }}
              style={styles.headerImage}
            />
            <Text style={styles.headerTitle}>About Me</Text>
            <Text style={styles.headerSubtitle}>
              Passionate developer crafting digital experiences
            </Text>
          </Animated.View>
        </LinearGradient>

        {/* Personal Story */}
        <Card style={styles.storySection}>
          <Card.Content>
            <Text style={styles.sectionTitle}>My Journey</Text>
            <Text style={styles.storyText}>
              My journey into software development began during university when I discovered the power of code to solve real-world problems. What started as curiosity quickly became a passion that led me to compete in WorldSkills International, where I proudly won the Gold Medal representing Kenya.
            </Text>
            <Text style={styles.storyText}>
              Today, I'm a full-stack developer at ICORE Information Systems, where I lead the development of enterprise solutions that serve thousands of users. My expertise spans across modern web technologies, mobile development, and cloud infrastructure.
            </Text>
            <Text style={styles.storyText}>
              Beyond coding, I'm passionate about mentoring young developers and contributing to the tech community in Kenya. I believe technology should be accessible and impactful, which drives me to create solutions that make a difference.
            </Text>
          </Card.Content>
        </Card>

        {/* Highlights Grid */}
        <View style={styles.highlightsSection}>
          <Text style={styles.sectionTitle}>What Sets Me Apart</Text>
          <View style={styles.highlightsGrid}>
            {highlights.map((highlight, index) => (
              <Animated.View 
                key={highlight.id} 
                style={[
                  styles.highlightCard,
                  index % 2 === 0 ? floatingStyle : scaleStyle
                ]}
              >
                <Surface style={styles.highlightSurface} elevation={3}>
                  <LinearGradient
                    colors={[highlight.color, `${highlight.color}20`]}
                    style={styles.highlightGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <View style={styles.highlightIcon}>
                      <highlight.icon size={24} color="white" />
                    </View>
                  </LinearGradient>
                  <View style={styles.highlightContent}>
                    <Text style={styles.highlightTitle}>{highlight.title}</Text>
                    <Text style={styles.highlightDescription}>
                      {highlight.description}
                    </Text>
                  </View>
                </Surface>
              </Animated.View>
            ))}
          </View>
        </View>

        {/* Interests */}
        <Card style={styles.interestsSection}>
          <Card.Content>
            <View style={styles.interestsHeader}>
              <Heart size={24} color={theme.colors.primary} />
              <Text style={styles.sectionTitle}>Personal Interests</Text>
            </View>
            <View style={styles.interestsGrid}>
              {interests.map((interest, index) => (
                <Animated.View 
                  key={index}
                  style={[
                    styles.interestChip,
                    index % 3 === 0 ? floatingStyle : 
                    index % 3 === 1 ? scaleStyle : {}
                  ]}
                >
                  <Chip 
                    mode="outlined"
                    style={styles.chip}
                    textStyle={styles.chipText}
                  >
                    {interest}
                  </Chip>
                </Animated.View>
              ))}
            </View>
          </Card.Content>
        </Card>

        {/* Animated Stats */}
        <Surface style={styles.statsSection} elevation={2}>
          <LinearGradient
            colors={[theme.colors.primaryContainer, theme.colors.secondaryContainer]}
            style={styles.statsGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.statsTitle}>By the Numbers</Text>
            <View style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <Animated.View 
                  key={index} 
                  style={[
                    styles.statItem,
                    index % 2 === 0 ? scaleStyle : floatingStyle
                  ]}
                >
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </Animated.View>
              ))}
            </View>
          </LinearGradient>
        </Surface>

        {/* Call to Action */}
        <Card style={styles.ctaSection}>
          <Card.Content>
            <View style={styles.ctaContent}>
              <Lightbulb size={32} color={theme.colors.primary} />
              <Text style={styles.ctaTitle}>Let's Build Something Amazing</Text>
              <Text style={styles.ctaText}>
                Ready to turn your ideas into reality? I'm always excited to take on new challenges and create impactful digital solutions.
              </Text>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  headerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.onPrimary,
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: theme.colors.onPrimary,
    fontFamily: 'Inter-Regular',
    opacity: 0.9,
    textAlign: 'center',
  },
  storySection: {
    margin: 24,
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
  storyText: {
    fontSize: 16,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Regular',
    lineHeight: 24,
    marginBottom: 16,
  },
  highlightsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  highlightsGrid: {
    gap: 16,
  },
  highlightCard: {
    marginBottom: 16,
  },
  highlightSurface: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  highlightGradient: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  highlightIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  highlightContent: {
    flex: 1,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  highlightDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
  },
  interestsSection: {
    margin: 24,
    borderRadius: 16,
  },
  interestsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  interestChip: {
    marginBottom: 8,
  },
  chip: {
    backgroundColor: theme.colors.surface,
  },
  chipText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
  statsSection: {
    margin: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  statsGradient: {
    padding: 24,
  },
  statsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    marginBottom: 16,
    minWidth: '40%',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.primary,
    fontFamily: 'Poppins-Bold',
  },
  statLabel: {
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
  },
  ctaSection: {
    margin: 24,
    borderRadius: 16,
  },
  ctaContent: {
    alignItems: 'center',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 16,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Regular',
    lineHeight: 24,
    textAlign: 'center',
  },
});