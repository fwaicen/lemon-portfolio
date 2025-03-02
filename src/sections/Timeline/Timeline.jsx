import React, { useEffect, useRef } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { Box, Typography, Chip, keyframes } from '@mui/material';
import { experiences } from './timeConfig';

export const TimelineSection = () => {
  const itemsRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        rootMargin: '-20% 0px',
        threshold: 0.1
      }
    );

    itemsRef.current.forEach(item => observer.observe(item));
    
    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Typography variant="h4" gutterBottom>
        Experiencia Profesional
      </Typography>
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem 
          key={index}
            ref={el => itemsRef.current[index] = el}
            sx={{
              opacity: 0,
              transform: 'translateY(50px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: `${index * 0.15}s`,
              '& .MuiTimelineContent-root': {
                py: 2
              }
            }}
          >
            <TimelineOppositeContent color="text.secondary">
              {exp.date}
            </TimelineOppositeContent>
            
            <TimelineSeparator>
              <TimelineDot color={exp.dotColor} />
              {index !== experiences.length - 1 && (
                <TimelineConnector sx={{ height: 50 }} />
              )}
            </TimelineSeparator>
            
            <TimelineContent>
              <Typography variant="h6" component="div" fontWeight="bold">
                {exp.company}
              </Typography>
              
              {exp.description.map((desc, i) => (
                <Typography key={i} variant="body1" paragraph>
                  {desc}
                </Typography>
              ))}
              
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" color="text.secondary" sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                  Tecnologías:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1, justifyContent: 'space-evenly'}}>
                  {exp.technologies.map((tech, i) => (
                    <Chip 
                      key={i} 
                      label={tech}
                      size="small"
                      sx={{ 
                        bgcolor: 'primary.light', 
                        color: 'common.white'
                      }}
                    />
                  ))}
                </Box>
              </Box>
              
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" color="text.secondary" sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                  Herramientas:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                  {exp.tools.map((tool, i) => (
                    <Chip 
                      key={i} 
                      label={tool}
                      size="small"
                      sx={{ 
                        bgcolor: 'primary.light', 
                        color: 'common.white'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default TimelineSection;