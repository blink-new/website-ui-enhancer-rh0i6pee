import { useState } from 'react'
import { Search, Globe, Zap, TrendingUp, CheckCircle, AlertCircle, Loader2, ChevronDown, ChevronUp, Star, Users, Plug, Shield, BarChart3, Smartphone } from 'lucide-react'
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
    keyFeatures: string[]
    integrations: string[]
    rating: number
    userCount: string
    category: string
    strengths: string[]
    limitations: string[]
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
  const [expandedCRM, setExpandedCRM] = useState<number | null>(null)

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
            pricing: 'Free - $1,200/month',
            keyFeatures: [
              'Contact Management',
              'Email Marketing',
              'Lead Scoring',
              'Sales Pipeline',
              'Marketing Automation',
              'Live Chat',
              'Reporting & Analytics',
              'Social Media Tools'
            ],
            integrations: [
              'WordPress',
              'Shopify',
              'Mailchimp',
              'Slack',
              'Zoom',
              'Google Workspace',
              'Microsoft Office',
              'Stripe'
            ],
            rating: 4.5,
            userCount: '100K+',
            category: 'All-in-One',
            strengths: [
              'Comprehensive free tier',
              'Excellent onboarding',
              'Strong content management',
              'Great for inbound marketing'
            ],
            limitations: [
              'Can be expensive at scale',
              'Complex for simple needs',
              'Limited customization'
            ]
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
            pricing: 'From $14.90/user/month',
            keyFeatures: [
              'Visual Sales Pipeline',
              'Activity Reminders',
              'Email Integration',
              'Deal Tracking',
              'Custom Fields',
              'Mobile App',
              'Sales Reporting',
              'Goal Setting'
            ],
            integrations: [
              'Gmail',
              'Outlook',
              'Zapier',
              'Trello',
              'Asana',
              'QuickBooks',
              'Xero',
              'PandaDoc'
            ],
            rating: 4.2,
            userCount: '95K+',
            category: 'Sales-Focused',
            strengths: [
              'Intuitive interface',
              'Great mobile experience',
              'Affordable pricing',
              'Quick setup'
            ],
            limitations: [
              'Limited marketing features',
              'Basic reporting',
              'No built-in phone system'
            ]
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
            pricing: 'From $25/user/month',
            keyFeatures: [
              'Lead Management',
              'Opportunity Tracking',
              'Account Management',
              'Workflow Automation',
              'Advanced Analytics',
              'Custom Objects',
              'Territory Management',
              'Forecasting'
            ],
            integrations: [
              'Microsoft Office',
              'Google Workspace',
              'Slack',
              'DocuSign',
              'Tableau',
              'AWS',
              'SAP',
              'Oracle'
            ],
            rating: 4.0,
            userCount: '150K+',
            category: 'Enterprise',
            strengths: [
              'Highly customizable',
              'Powerful automation',
              'Extensive app marketplace',
              'Enterprise-grade security'
            ],
            limitations: [
              'Steep learning curve',
              'Expensive for small teams',
              'Complex setup required'
            ]
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
                <div key={crm.id} className="border rounded-xl p-6 hover:border-primary/50 transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-white to-gray-50/50">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                        <span className="text-2xl">{crm.logo}</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-xl text-gray-900">{crm.name}</h3>
                          <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                            {crm.category}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="font-medium">{crm.pricing}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{crm.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{crm.userCount} users</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-3xl font-bold text-green-600">{crm.matchScore}%</span>
                        <span className="text-sm text-gray-500">match</span>
                      </div>
                      <Badge 
                        variant={index === 0 ? "default" : "secondary"}
                        className={index === 0 ? "bg-green-500 text-white" : ""}
                      >
                        {index === 0 ? "🏆 Best Match" : `#${index + 1} Choice`}
                      </Badge>
                    </div>
                  </div>

                  {/* Key Features & Integrations Side by Side */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                    {/* Key Features */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="h-4 w-4 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">Key Features</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {crm.keyFeatures.slice(0, 6).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                        {crm.keyFeatures.length > 6 && (
                          <div className="text-xs text-gray-500 col-span-2">
                            +{crm.keyFeatures.length - 6} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Integrations */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Plug className="h-4 w-4 text-green-600" />
                        <h4 className="font-semibold text-gray-900">Popular Integrations</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {crm.integrations.slice(0, 6).map((integration, integrationIndex) => (
                          <Badge 
                            key={integrationIndex} 
                            variant="outline" 
                            className="text-xs bg-green-50 text-green-700 border-green-200"
                          >
                            {integration}
                          </Badge>
                        ))}
                        {crm.integrations.length > 6 && (
                          <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                            +{crm.integrations.length - 6} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Why this CRM fits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Why this CRM fits your business:</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {crm.reasons.map((reason, reasonIndex) => (
                        <div key={reasonIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div className="border-t pt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedCRM(expandedCRM === crm.id ? null : crm.id)}
                      className="w-full justify-between text-gray-700 hover:text-gray-900"
                    >
                      <span className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <span>View detailed analysis</span>
                      </span>
                      {expandedCRM === crm.id ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>

                    {expandedCRM === crm.id && (
                      <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Strengths */}
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2 flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4" />
                              <span>Strengths</span>
                            </h5>
                            <div className="space-y-2">
                              {crm.strengths.map((strength, strengthIndex) => (
                                <div key={strengthIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                                  <span className="text-sm text-gray-700">{strength}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Limitations */}
                          <div>
                            <h5 className="font-semibold text-orange-700 mb-2 flex items-center space-x-2">
                              <AlertCircle className="h-4 w-4" />
                              <span>Considerations</span>
                            </h5>
                            <div className="space-y-2">
                              {crm.limitations.map((limitation, limitationIndex) => (
                                <div key={limitationIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0 mt-2"></div>
                                  <span className="text-sm text-gray-700">{limitation}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* All Features */}
                        <div>
                          <h5 className="font-semibold text-blue-700 mb-2 flex items-center space-x-2">
                            <BarChart3 className="h-4 w-4" />
                            <span>Complete Feature List</span>
                          </h5>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {crm.keyFeatures.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* All Integrations */}
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2 flex items-center space-x-2">
                            <Plug className="h-4 w-4" />
                            <span>All Integrations</span>
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {crm.integrations.map((integration, integrationIndex) => (
                              <Badge 
                                key={integrationIndex} 
                                variant="outline" 
                                className="text-xs bg-purple-50 text-purple-700 border-purple-200"
                              >
                                {integration}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-6 pt-4 border-t">
                    <Button
                      onClick={() => onCRMSelect(crm.id)}
                      className="flex-1 bg-primary text-white hover:bg-primary/90"
                    >
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Full Details
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open('#', '_blank')}
                      className="flex-1"
                    >
                      <Smartphone className="h-4 w-4 mr-2" />
                      Start Free Trial
                    </Button>
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