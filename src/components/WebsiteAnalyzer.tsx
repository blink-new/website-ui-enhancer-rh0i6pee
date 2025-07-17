import { useState } from 'react'
import { Search, Globe, Zap, TrendingUp, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Alert, AlertDescription } from './ui/alert'

interface AnalysisResult {
  businessType: string
  industry: string
  companySize: string
  techStack: string[]
  currentChallenges: string[]
  recommendedCRMs: {
    id: number
    name: string
    logo: string
    matchScore: number
    reasons: string[]
    pricing: string
  }[]
  insights: {
    title: string
    description: string
    priority: 'high' | 'medium' | 'low'
  }[]
}

interface WebsiteAnalyzerProps {
  onCRMSelect: (crmId: number) => void
}

export function WebsiteAnalyzer({ onCRMSelect }: WebsiteAnalyzerProps) {
  const [url, setUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState('')

  const analyzeWebsite = async () => {
    if (!url) return

    // Validate URL
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`)
    } catch {
      setError('Please enter a valid website URL')
      return
    }

    setIsAnalyzing(true)
    setError('')

    // Simulate AI analysis (in real implementation, this would call an AI service)
    setTimeout(() => {
      // Mock analysis result based on URL patterns
      const mockResult: AnalysisResult = {
        businessType: url.includes('shop') || url.includes('store') ? 'E-commerce' : 
                     url.includes('tech') || url.includes('software') ? 'Technology' :
                     url.includes('health') || url.includes('medical') ? 'Healthcare' : 'Professional Services',
        industry: 'Technology & Software',
        companySize: 'Small to Medium Business (10-50 employees)',
        techStack: ['WordPress', 'Google Analytics', 'Stripe', 'Mailchimp'],
        currentChallenges: [
          'Lead management inefficiency',
          'Lack of sales pipeline visibility',
          'Manual follow-up processes',
          'Limited customer data insights'
        ],
        recommendedCRMs: [
          {
            id: 2,
            name: 'HubSpot',
            logo: '🟠',
            matchScore: 95,
            reasons: [
              'Perfect for your business size',
              'Strong marketing automation',
              'Excellent WordPress integration',
              'Free tier available'
            ],
            pricing: 'Free - $1,200/month'
          },
          {
            id: 3,
            name: 'Pipedrive',
            logo: '🟢',
            matchScore: 88,
            reasons: [
              'Visual pipeline management',
              'Great for small teams',
              'Easy to implement',
              'Strong mobile app'
            ],
            pricing: 'From $14.90/user/month'
          },
          {
            id: 1,
            name: 'Salesforce',
            logo: '🔵',
            matchScore: 75,
            reasons: [
              'Comprehensive feature set',
              'Scalable for growth',
              'Advanced analytics',
              'Extensive integrations'
            ],
            pricing: 'From $25/user/month'
          }
        ],
        insights: [
          {
            title: 'Immediate Priority: Lead Capture Optimization',
            description: 'Your website needs better lead capture forms and automated follow-up sequences.',
            priority: 'high'
          },
          {
            title: 'Growth Opportunity: Email Marketing Integration',
            description: 'Integrate your CRM with your existing Mailchimp setup for better nurturing.',
            priority: 'medium'
          },
          {
            title: 'Future Consideration: Advanced Analytics',
            description: 'As you grow, consider CRMs with advanced reporting and forecasting.',
            priority: 'low'
          }
        ]
      }

      setAnalysisResult(mockResult)
      setIsAnalyzing(false)
    }, 3000)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-blue-600 bg-blue-50 border-blue-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      {/* URL Input Section */}
      <Card className="gradient-card border-2 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Website Analysis Tool</span>
          </CardTitle>
          <CardDescription>
            Enter your website URL to get personalized CRM recommendations based on your business profile
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="url"
                placeholder="Enter your website URL (e.g., yourcompany.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pl-10"
                disabled={isAnalyzing}
              />
            </div>
            <Button 
              onClick={analyzeWebsite}
              disabled={!url || isAnalyzing}
              className="bg-primary text-white hover:bg-primary/90"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Analyze
                </>
              )}
            </Button>
          </div>
          
          {error && (
            <Alert className="border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-600">{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
              <div>
                <div className="font-medium text-blue-900">Analyzing your website...</div>
                <div className="text-sm text-blue-700">
                  Examining business type, tech stack, and CRM requirements
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Analysis Results */}
      {analysisResult && (
        <div className="space-y-6">
          {/* Business Profile */}
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span>Business Profile Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Business Type</div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {analysisResult.businessType}
                  </Badge>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Industry</div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {analysisResult.industry}
                  </Badge>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Company Size</div>
                  <div className="text-sm text-gray-600">{analysisResult.companySize}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Current Tech Stack</div>
                  <div className="flex flex-wrap gap-1">
                    {analysisResult.techStack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Challenges */}
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                <span>Identified Challenges</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {analysisResult.currentChallenges.map((challenge, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommended CRMs */}
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-green-500" />
                <span>Recommended CRM Solutions</span>
              </CardTitle>
              <CardDescription>
                Based on your website analysis, here are the best CRM matches for your business
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {analysisResult.recommendedCRMs.map((crm, index) => (
                <div key={crm.id} className="border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{crm.logo}</span>
                      <div>
                        <div className="font-semibold text-lg">{crm.name}</div>
                        <div className="text-sm text-gray-600">{crm.pricing}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-600">{crm.matchScore}%</span>
                        <span className="text-sm text-gray-500">match</span>
                      </div>
                      <Badge 
                        variant={index === 0 ? "default" : "secondary"}
                        className={index === 0 ? "bg-green-500 text-white" : ""}
                      >
                        {index === 0 ? "Best Match" : `#${index + 1} Choice`}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Why this CRM fits:</div>
                      <div className="space-y-1">
                        {crm.reasons.map((reason, reasonIndex) => (
                          <div key={reasonIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{reason}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        onClick={() => onCRMSelect(crm.id)}
                        className="bg-primary text-white hover:bg-primary/90"
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open('#', '_blank')}
                      >
                        Start Free Trial
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Strategic Insights */}
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                <span>Strategic Insights & Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {analysisResult.insights.map((insight, index) => (
                <div key={index} className={`p-3 rounded-lg border ${getPriorityColor(insight.priority)}`}>
                  <div className="flex items-start space-x-2">
                    <div className="flex-1">
                      <div className="font-medium mb-1">{insight.title}</div>
                      <div className="text-sm opacity-90">{insight.description}</div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getPriorityColor(insight.priority)} border-current`}
                    >
                      {insight.priority.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}