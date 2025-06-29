import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
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
import { Building, MapPin, Calendar, Award, CircleCheck as CheckCircle, ExternalLink } from 'lucide-react-native';
import { experience, certifications } from '@/constants/data';

const { width } = Dimensions.get('window');

export default function ExperienceScreen() {
  const theme = useTheme();
  
  const floatingAnimation = useSharedValue(0);
  const scaleAnimation = useSharedValue(1);

  React.useEffect(() => {
    floatingAnimation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 4000 }),
        withTiming(0, { duration: 4000 })
      ),
      -1,
      true
    );

    scaleAnimation.value = withRepeat(
      withSequence(
        withTiming(1.02, { duration: 3000 }),
        withTiming(1, { duration: 3000 })
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
          <Text style={styles.headerTitle}>Professional Experience</Text>
          <Text style={styles.headerSubtitle}>
            My journey through the tech industry
          </Text>
        </LinearGradient>

        {/* Timeline */}
        <View style={styles.timelineContainer}>
          {experience.map((exp, index) => (
            <Animated.View 
              key={exp.id}
              style={[
                styles.timelineItem,
                index % 2 === 0 ? floatingStyle : scaleStyle
              ]}
            >
              {/* Timeline Line */}
              <View style={styles.timelineLine}>
                <View style={styles.timelineDot} />
                {index < experience.length - 1 && (
                  <View style={styles.timelineConnector} />
                )}
              </View>

              {/* Experience Card */}
              <Card style={[styles.experienceCard, { marginLeft: index % 2 === 0 ? 0 : 40 }]}>
                <Card.Content>
                  {/* Header */}
                  <View style={styles.cardHeader}>
                    <View style={styles.titleSection}>
                      <Text style={styles.jobTitle}>{exp.title}</Text>
                      <View style={styles.companyInfo}>
                        <Building size={16} color={theme.colors.primary} />
                        <Text style={styles.companyName}>{exp.company}</Text>
                      </View>
                    </View>
                    <Chip 
                      mode="outlined" 
                      style={styles.typeChip}
                      textStyle={styles.typeChipText}
                    >
                      {exp.type}
                    </Chip>
                  </View>

                  {/* Meta Info */}
                  <View style={styles.metaInfo}>
                    <View style={styles.metaItem}>
                      <Calendar size={14} color={theme.colors.onSurfaceVariant} />
                      <Text style={styles.metaText}>{exp.period}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <MapPin size={14} color={theme.colors.onSurfaceVariant} />
                      <Text style={styles.metaText}>{exp.location}</Text>
                    </View>
                  </View>

                  {/* Description */}
                  <Text style={styles.description}>{exp.description}</Text>

                  {/* Technologies */}
                  <View style={styles.technologiesSection}>
                    <Text style={styles.sectionLabel}>Technologies Used:</Text>
                    <View style={styles.technologiesGrid}>
                      {exp.technologies.map((tech, techIndex) => (
                        <Chip 
                          key={techIndex}
                          mode="flat"
                          style={styles.techChip}
                          textStyle={styles.techChipText}
                        >
                          {tech}
                        </Chip>
                      ))}
                    </View>
                  </View>

                  {/* Achievements */}
                  <View style={styles.achievementsSection}>
                    <Text style={styles.sectionLabel}>Key Achievements:</Text>
                    {exp.achievements.map((achievement, achIndex) => (
                      <View key={achIndex} style={styles.achievementItem}>
                        <CheckCircle size={16} color={theme.colors.secondary} />
                        <Text style={styles.achievementText}>{achievement}</Text>
                      </View>
                    ))}
                  </View>
                </Card.Content>
              </Card>
            </Animated.View>
          ))}
        </View>

        {/* Certifications Section */}
        <Surface style={styles.certificationsSection} elevation={2}>
          <LinearGradient
            colors={[theme.colors.tertiaryContainer, theme.colors.primaryContainer]}
            style={styles.certificationsGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.certificationsHeader}>
              <Award size={28} color={theme.colors.primary} />
              <Text style={styles.certificationsTitle}>Certifications & Awards</Text>
            </View>
            
            {certifications.map((cert, index) => (
              <Animated.View 
                key={cert.id}
                style={[
                  styles.certificationCard,
                  index % 2 === 0 ? scaleStyle : floatingStyle
                ]}
              >
                <Card style={styles.certCard}>
                  <Card.Content>
                    <View style={styles.certHeader}>
                      <Text style={styles.certTitle}>{cert.title}</Text>
                      <Text style={styles.certYear}>{cert.year}</Text>
                    </View>
                    <Text style={styles.certOrganization}>{cert.organization}</Text>
                    <Text style={styles.certDescription}>{cert.description}</Text>
                  </Card.Content>
                </Card>
              </Animated.View>
            ))}
          </LinearGradient>
        </Surface>

        {/* Call to Action */}
        <Card style={styles.ctaSection}>
          <Card.Content>
            <View style={styles.ctaContent}>
              <ExternalLink size={32} color={theme.colors.primary} />
              <Text style={styles.ctaTitle}>Interested in My Experience?</Text>
              <Text style={styles.ctaText}>
                Let's discuss how my background and expertise can contribute to your next project.
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
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.onPrimary,
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: theme.colors.onPrimary,
    fontFamily: 'Inter-Regular',
    opacity: 0.9,
    textAlign: 'center',
  },
  timelineContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  timelineLine: {
    alignItems: 'center',
    marginRight: 16,
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    zIndex: 2,
  },
  timelineConnector: {
    width: 2,
    flex: 1,
    backgroundColor: theme.colors.outline,
    marginTop: 8,
  },
  experienceCard: {
    flex: 1,
    borderRadius: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleSection: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  companyName: {
    fontSize: 16,
    color: theme.colors.primary,
    fontFamily: 'Inter-Medium',
  },
  typeChip: {
    backgroundColor: theme.colors.primaryContainer,
  },
  typeChipText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
  metaInfo: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Regular',
  },
  description: {
    fontSize: 15,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Regular',
    lineHeight: 22,
    marginBottom: 16,
  },
  technologiesSection: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 8,
  },
  technologiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  techChip: {
    backgroundColor: theme.colors.secondaryContainer,
    marginBottom: 4,
  },
  techChipText: {
    fontSize: 11,
    fontFamily: 'Inter-Medium',
  },
  achievementsSection: {},
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  achievementText: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
  },
  certificationsSection: {
    margin: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  certificationsGradient: {
    padding: 24,
  },
  certificationsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  certificationsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Poppins-SemiBold',
  },
  certificationCard: {
    marginBottom: 16,
  },
  certCard: {
    borderRadius: 12,
  },
  certHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  certTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Poppins-SemiBold',
  },
  certYear: {
    fontSize: 14,
    color: theme.colors.primary,
    fontFamily: 'Inter-SemiBold',
    backgroundColor: theme.colors.primaryContainer,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  certOrganization: {
    fontSize: 16,
    color: theme.colors.primary,
    fontFamily: 'Inter-Medium',
    marginBottom: 8,
  },
  certDescription: {
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
  },
  ctaSection: {
    margin: 24,
    borderRadius: 16,
  },
  ctaContent: {
    alignItems: 'center',
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