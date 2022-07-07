require 'test_helper'

class HowitworksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get howitworks_index_url
    assert_response :success
  end

end
