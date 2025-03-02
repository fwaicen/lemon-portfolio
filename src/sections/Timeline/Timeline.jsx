import { useEffect, useRef, useState } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { Box, Typography, Chip, Button, Modal, Paper } from '@mui/material';
import { experiences } from './timeConfig';

export const TimelineSection = ({ darkMode }) => {
  const itemsRef = useRef([]);
  const [open, setOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);

  const handleOpen = (exp) => {
    setSelectedExp(exp);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedExp(null);
  };

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
    <Box sx={{ overflow: 'hidden', px: { xs: 2, sm: 4 } }}>
      <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
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
            <TimelineOppositeContent color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' }, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
              {exp.date}
            </TimelineOppositeContent>
            
            <TimelineSeparator>
              <TimelineDot color={exp.dotColor} />
              {index !== experiences.length - 1 && (
                <TimelineConnector sx={{ height: { xs: 30, sm: 50 } }} />
              )}
            </TimelineSeparator>
            
            <TimelineContent>
              <Typography variant="h6" component="div" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                {exp.company}
              </Typography>
              
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {exp.description.map((desc, i) => (
                  <Typography key={i} variant="body1" paragraph sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                    {desc}
                  </Typography>
                ))}
                
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                    Tecnologías:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1, justifyContent: 'space-evenly' }}>
                    {exp.technologies.map((tech, i) => (
                      <Chip 
                        key={i} 
                        label={tech}
                        size="small"
                        sx={{ 
                          bgcolor: 'primary.light', 
                          color: 'common.white',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
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
                          color: 'common.white',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: { xs: 'block', sm: 'none' }, mt: 2 }}>
                <Button variant="text" onClick={() => handleOpen(exp)} sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                  Ver más
                </Button>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <Modal open={open} onClose={handleClose}>
        <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, p: 4, borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', background: darkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)' }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backdropFilter: 'blur(10px)', zIndex: -1, borderRadius: '12px', background: darkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)' }} />
          {selectedExp && (
            <>
              <Typography variant="h6" component="div" fontWeight="bold">
                {selectedExp.company}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {selectedExp.date}
              </Typography>
              {selectedExp.description.map((desc, i) => (
                <Typography key={i} variant="body1" paragraph>
                  {desc}
                </Typography>
              ))}
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  Tecnologías:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                  {selectedExp.technologies.map((tech, i) => (
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
                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  Herramientas:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                  {selectedExp.tools.map((tool, i) => (
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
            </>
          )}
        </Paper>
      </Modal>
    </Box>
  );
};

export default TimelineSection;