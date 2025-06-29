import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  Dimensions,
  TouchableOpacity,
  Linking,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Button, Card, Surface } from 'react-native-paper';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withRepeat, 
  withTiming,
  withSequence,
  interpolate,
  runOnJS
} from 'react-native-reanimated';
import { 
  Github, 
  Linkedin, 
  Mail,
  Download,
  Star,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react-native';
import { personalData, titles, stats } from '@/constants/data';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const theme = useTheme();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const floatingAnimation = useSharedValue(0);
  const scaleAnimation = useSharedValue(1);
  const rotateAnimation = useSharedValue(0);

  useEffect(() => {
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
        withTiming(1.05, { duration: 2000 }),
        withTiming(1, { duration: 2000 })
      ),
      -1,
      true
    );

    rotateAnimation.value = withRepeat(
      withTiming(360, { duration: 20000 }),
      -1,
      false
    );
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      const nextText = isDeleting 
        ? currentTitle.substring(0, displayText.length - 1)
        : currentTitle.substring(0, displayText.length + 1);
      
      timeout = setTimeout(() => setDisplayText(nextText), isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  const handleSocialPress = (url: string) => {
    Linking.openURL(url);
  };

  const handleDownloadResume = () => {
    // In a real app, this would download the resume
    console.log('Download resume');
  };

  const floatingStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(floatingAnimation.value, [0, 1], [0, -20]) }
    ],
  }));

  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleAnimation.value }],
  }));

  const rotateStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotateAnimation.value}deg` }],
  }));

  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Background Elements */}
        <View style={styles.backgroundElements}>
          <Animated.View style={[styles.floatingCircle, rotateStyle]} />
          <Animated.View style={[styles.floatingCircle2, rotateStyle]} />
        </View>

        {/* Hero Section */}
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.secondary]}
          style={styles.heroSection}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.heroContent}>
            {/* Profile Image */}
            <Animated.View style={[styles.profileContainer, scaleStyle]}>
              <View style={styles.profileImageWrapper}>
                <Image
                  source={{ uri: personalData.profileImage }}
                  style={styles.profileImage}
                />
                <LinearGradient
                  colors={[theme.colors.tertiary, theme.colors.primary]}
                  style={styles.profileBorder}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                />
              </View>
              
              {/* Floating Emojis */}
              <Animated.View style={[styles.floatingEmoji, styles.emoji1, floatingStyle]}>
                <Text style={styles.emojiText}>💻</Text>
              </Animated.View>
              <Animated.View style={[styles.floatingEmoji, styles.emoji2, floatingStyle]}>
                <Text style={styles.emojiText}>🚀</Text>
              </Animated.View>
            </Animated.View>

            {/* Hero Text */}
            <View style={styles.heroText}>
              <Text style={styles.greeting}>Hello, I'm</Text>
              <Text style={styles.name}>{personalData.name}</Text>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{displayText}</Text>
                <View style={styles.cursor} />
              </View>
              <Text style={styles.location}>{personalData.location}</Text>
            </View>

            {/* CTA Buttons */}
            <View style={styles.ctaContainer}>
              <Button 
                mode="contained" 
                style={[styles.ctaButton, styles.primaryButton]}
                labelStyle={styles.buttonText}
                onPress={() => console.log('View Work')}
              >
                View My Work
              </Button>
              <Button 
                mode="outlined" 
                style={[styles.ctaButton, styles.secondaryButton]}
                labelStyle={[styles.buttonText, { color: theme.colors.onPrimary }]}
                onPress={() => console.log('Hire Me')}
              >
                Hire Me
              </Button>
            </View>

            {/* Social Links */}
            <View style={styles.socialContainer}>
              <TouchableOpacity 
                style={styles.socialButton}
                onPress={() => handleSocialPress(personalData.social.github)}
              >
                <Github size={24} color={theme.colors.onPrimary} />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.socialButton}
                onPress={() => handleSocialPress(personalData.social.linkedin)}
              >
                <Linkedin size={24} color={theme.colors.onPrimary} />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.socialButton}
                onPress={() => handleSocialPress(personalData.social.email)}
              >
                <Mail size={24} color={theme.colors.onPrimary} />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.socialButton}
                onPress={handleDownloadResume}
              >
                <Download size={24} color={theme.colors.onPrimary} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>

        {/* Stats Section */}
        <Surface style={styles.statsSection} elevation={2}>
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <Animated.View key={index} style={[styles.statCard, scaleStyle]}>
                <View style={styles.statIcon}>
                  {index === 0 && <Award size={24} color={theme.colors.primary} />}
                  {index === 1 && <Star size={24} color={theme.colors.secondary} />}
                  {index === 2 && <Globe size={24} color={theme.colors.tertiary} />}
                  {index === 3 && <TrendingUp size={24} color={theme.colors.purple} />}
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </Animated.View>
            ))}
          </View>
        </Surface>

        {/* Bio Section */}
        <Card style={styles.bioSection}>
          <Card.Content>
            <Text style={styles.bioTitle}>About Me</Text>
            <Text style={styles.bioText}>{personalData.bio}</Text>
            <Button 
              mode="contained"
              style={styles.learnMoreButton}
              onPress={() => console.log('Learn More')}
            >
              Learn More About Me
            </Button>
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
  backgroundElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  floatingCircle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: theme.colors.primaryContainer,
    opacity: 0.1,
    top: -50,
    right: -50,
  },
  floatingCircle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: theme.colors.secondaryContainer,
    opacity: 0.1,
    bottom: -75,
    left: -75,
  },
  heroSection: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    minHeight: height * 0.7,
    justifyContent: 'center',
  },
  heroContent: {
    alignItems: 'center',
  },
  profileContainer: {
    position: 'relative',
    marginBottom: 32,
  },
  profileImageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    zIndex: 2,
  },
  profileBorder: {
    position: 'absolute',
    top: -4,
    left: -4,
    width: 128,
    height: 128,
    borderRadius: 64,
    zIndex: 1,
  },
  floatingEmoji: {
    position: 'absolute',
    zIndex: 3,
  },
  emoji1: {
    top: -10,
    right: -10,
  },
  emoji2: {
    bottom: -10,
    left: -10,
  },
  emojiText: {
    fontSize: 24,
  },
  heroText: {
    alignItems: 'center',
    marginBottom: 32,
  },
  greeting: {
    fontSize: 18,
    color: theme.colors.onPrimary,
    fontFamily: 'Inter-Regular',
    opacity: 0.9,
    marginBottom: 8,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.onPrimary,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 32,
    marginBottom: 8,
  },
  titleText: {
    fontSize: 20,
    color: theme.colors.onPrimary,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  cursor: {
    width: 2,
    height: 24,
    backgroundColor: theme.colors.onPrimary,
    marginLeft: 2,
  },
  location: {
    fontSize: 16,
    color: theme.colors.onPrimary,
    fontFamily: 'Inter-Regular',
    opacity: 0.8,
  },
  ctaContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  ctaButton: {
    borderRadius: 24,
    paddingHorizontal: 8,
  },
  primaryButton: {
    backgroundColor: theme.colors.onPrimary,
  },
  secondaryButton: {
    borderColor: theme.colors.onPrimary,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsSection: {
    margin: 24,
    borderRadius: 16,
    padding: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 24,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.surfaceContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
  },
  bioSection: {
    margin: 24,
    borderRadius: 16,
  },
  bioTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
  bioText: {
    fontSize: 16,
    color: theme.colors.onSurfaceVariant,
    fontFamily: 'Inter-Regular',
    lineHeight: 24,
    marginBottom: 24,
  },
  learnMoreButton: {
    borderRadius: 24,
  },
});